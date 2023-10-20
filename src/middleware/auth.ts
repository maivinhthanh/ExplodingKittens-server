import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './jwt-service';
import { IUser } from '../models/user';

interface TokenPayload {
  data: any;
}

interface CustomRequest extends Request {
  user?: IUser;
}

const getRequestToken = (req: Request): string | undefined => {
  const authHeader = req.headers.authorization;
  const token = (authHeader && authHeader.split(' ')[1]) || req.query.token || req.body.token;
  return token;
};

const responseError = (res: Response, error: { status: number; title: string } | string) => {
  if (typeof error === "string") {
    return res.status(400).send({ title: error });
  }

  return res.status(error.status).send({ title: error.title });
};


const responseBadRequest = (res: Response) => {
  return responseError(res, { status: 400, title: 'Bad request' });
};

const responseNotAuthorized = (res: Response) => {
  res.status(401).send({ title: 'Not authorized' });
};

const responseNoPermission = (res: Response) => {
  return responseError(res, { status: 403, title: 'No Permission' });
};

const responseMissingArguments = (res: Response) => {
  return responseError(res, { status: 400, title: 'Missing arguments' });
};

const authorizeJWTToken = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = await getRequestToken(req);
  if (!token) return responseNotAuthorized(res);
  try {
    const decoded = await verifyToken(token) as TokenPayload;
    if (decoded && decoded.data && decoded.data._id) {
      req.user = { ...decoded.data };
      return next();
    }
    return responseError(res, { status: 401, title: 'Not authorized' });
  } catch (e) {
    return responseError(res, { status: 500, title: 'Oh no' });
  }
};

export {
  CustomRequest,
  getRequestToken,
  authorizeJWTToken,
  responseError,
  responseBadRequest,
  responseNotAuthorized,
  responseNoPermission,
  responseMissingArguments
};
