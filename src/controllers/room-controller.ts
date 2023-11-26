import { Request, Response } from "express";
import {
  CustomRequest,
  responseBadRequest,
  responseError,
} from "../middleware/auth";
import roomModel from "../models/room";
import { getBasic, getListCard, getCat } from "../services/card-service";

const createRoom = async (req: Request, res: Response) => {
  let { members, cards, type, name } =
    (req.body as {
      members: Array<string>;
      cards: Array<string>;
      type: string;
      name: string;
    }) || {};
  if (members.length === 0) {
    return responseBadRequest(res);
  }

  if (!type) {
    type = "NORMAL";
    cards = getBasic();
  } else {
    const listCat = getCat();
    cards = [...cards, ...listCat];
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

    const room = await roomModel.findById(id).populate("members");
    const listCardDetail = await getListCard(room?.cards || []);
    res.json({ room, listCardDetail });
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const getMembersRoom = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = (req.params as { id: string }) || {};
    if (!id) {
      return responseBadRequest(res);
    }

    const room = await roomModel
      .findById(id)
      .select("members.")
    res.json({ room });
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const getListRooms = async (req: CustomRequest, res: Response) => {
  try {
    const { _id } = (req.user as { _id: string }) || {};
    if (!_id) {
      return responseBadRequest(res);
    }

    const result = await roomModel
      .find({
        members: _id,
      })
      .select("-cards");

    res.json(result);
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

export {
  createRoom,
  getDetailRoom,
  updateRoomName,
  getListRooms,
  getMembersRoom,
};
