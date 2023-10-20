import { Request, Response, NextFunction } from "express";
import {
  CustomRequest,
  responseBadRequest,
  responseError,
} from "../middleware/auth";
import roomModel from "../models/room";

const createRoom = async (req: Request, res: Response) => {
  let { members, cards, type, name } =
    (req.body as {
      members: Array<string>;
      cards: Array<string>;
      type: string;
      name: string;
    }) || {};
  if (members.length === 0 && cards.length === 0) {
    return responseBadRequest(res);
  }

  if (!type) {
    type = "NORMAL";
  }

  try {
    const roomData = {
      members,
      cards,
      type,
      name,
    };

    const room = await roomModel.create(roomData);
    if (!room) {
      return responseError(res, { status: 500, title: "Error creating room" });
    }

    res.json(room);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const getDetailRoom = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = (req.params as { id: string }) || {};
    if (!id) {
      return responseBadRequest(res);
    }

    const user = await roomModel.findById(id);
    res.json(user);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const updateRoomName = async (req: Request, res: Response) => {
  try {
    const { id } = (req.params as { id: string }) || {};
    const { name } =
      (req.body as {
        name: string;
      }) || {};
    if (!id) {
      return responseBadRequest(res);
    }

    const data = { name };

    const user = await roomModel.findByIdAndUpdate(id, data, { new: true });

    res.json(user);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const getListRooms = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await roomModel.find({});
  res.json(result);
};

export { createRoom, getListRooms, getDetailRoom, updateRoomName };
