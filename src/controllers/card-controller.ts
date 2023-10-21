import { Request, Response, NextFunction } from "express";
import {
  CustomRequest,
  responseBadRequest,
  responseError,
} from "../middleware/auth";
import cardModel, { ICard } from "../models/card";

const createCard = async (req: Request, res: Response) => {
  let { name, code, type, method, limitted, times, logo, image } =
    (req.body as ICard) || {};
  if (!name && !code && !type && !method && !limitted) {
    return responseBadRequest(res);
  }

  try {
    const cardData = {
      name,
      code,
      type,
      method,
      limitted,
      times,
      logo,
      image,
    };

    const card = await cardModel.create(cardData);
    if (!card) {
      return responseError(res, { status: 500, title: "Error creating card" });
    }

    res.json(card);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const getDetailCard = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = (req.params as { id: string }) || {};
    if (!id) {
      return responseBadRequest(res);
    }

    const user = await cardModel.findById(id);
    res.json(user);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const getListCard = async (req: Request, res: Response, next: NextFunction) => {
  const result = await cardModel.find({});
  res.json(result);
};



export { createCard, getListCard, getDetailCard };
