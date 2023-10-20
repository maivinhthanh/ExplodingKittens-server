import { Request, Response, NextFunction } from "express";
import {
  CustomRequest,
  responseBadRequest,
  responseError,
} from "../middleware/auth";
import userModel from "../models/user";
import { checkUserExist, createToken } from "../services/user-service";
import { decodeToken } from "../middleware/jwt-service";

const createUser = async (req: Request, res: Response) => {
  const { name, email, password } =
    (req.body as { name: string; email: string; password: string }) || {};
  if (!name && !email && !password) {
    return responseBadRequest(res);
  }

  try {
    const existingUser = await checkUserExist(email.toLowerCase());

    if (existingUser) {
      return responseError(res, {
        status: 409,
        title: "Conflict - User with this email already exists",
      });
    }

    const userData = {
      name,
      email,
      password,
    };

    const newUser = await userModel.create(userData);
    if (!newUser) {
      return responseError(res, { status: 500, title: "Error creating user" });
    }

    const token = await createToken(newUser);

    res.json(token);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } =
      (req.body as { email: string; password: string }) || {};
    if (!email && !password) {
      return responseBadRequest(res);
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return responseError(res, { status: 404, title: "User not found" });
    }

    if (password !== user.password) {
      return responseError(res, {
        status: 404,
        title: "Password is incorrect",
      });
    }

    const token = await createToken(user);

    res.json(token);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const getDetailMe = async (req: CustomRequest, res: Response) => {
  try {
    const { _id } = (req.user as { _id: string }) || {};
    if (!_id) {
      return responseBadRequest(res);
    }

    const user = await userModel.findById(_id).select("-password");
    res.json(user);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const getDetailUser = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = (req.params as { id: string }) || {};
    if (!id) {
      return responseBadRequest(res);
    }

    const user = await userModel.findById(id).select("-password");
    res.json(user);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = (req.params as { id: string }) || {};
    const { name, picture, description } =
      (req.body as {
        name: string;
        picture: string;
        description: string;
      }) || {};
    if (!id) {
      return responseBadRequest(res);
    }

    const data = { name, picture, description };

    const user = await userModel.findByIdAndUpdate(id, data, { new: true });

    res.json(user);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refreshTokenFromClient = req.body.refreshToken;
    if (!refreshTokenFromClient) return responseBadRequest(res);

    const decoded = await decodeToken(refreshTokenFromClient);

    if (decoded instanceof Error) {
      return responseError(res, {
        status: 500,
        title: "Oh no, something wrong",
      });
    } else {
      const user = decoded.data;
      const token = createToken(user);
      res.json(token);
    }
  } catch (error) {
    return responseError(res, error as string);
  }
};

const getListUser = async (req: Request, res: Response, next: NextFunction) => {
  const result = await userModel.find({});
  res.json(result);
};

export {
  createUser,
  getListUser,
  getDetailMe,
  login,
  getDetailUser,
  updateUser,
  refreshToken,
};
