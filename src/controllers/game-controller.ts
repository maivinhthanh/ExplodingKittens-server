import { Request, Response } from "express";
import {
  CustomRequest,
  responseBadRequest,
  responseError,
} from "../middleware/auth";
import gameModel from "../models/game";
import roomModel from "../models/room";

import { MemberGame } from "../models/game";

const createGame = async (req: Request, res: Response) => {
  let { members, room } =
    (req.body as {
      members: Array<MemberGame>;
      room: string;
    }) || {};
  if (members.length === 0) {
    return responseBadRequest(res);
  }

  try {
    const roomDetail = await roomModel.findById(room).select("cards");
    const countMembers = members.length;
    let listCard: Array<string> = [];
    for (let i = 0; i < countMembers; i++) {
      listCard.push("EXPLODING-KITTEN");
    }

    if (Array.isArray(roomDetail?.cards) && roomDetail?.cards) {
      listCard = [...listCard, ...roomDetail?.cards];
    }

    const gameData = {
      members,
      room,
      drawCards: listCard,
    };

    const game = await gameModel.create(gameData);
    if (!game) {
      return responseError(res, { status: 500, title: "Error creating game" });
    }

    res.json(game);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const getDetailGame = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = (req.params as { id: string }) || {};
    if (!id) {
      return responseBadRequest(res);
    }

    let game = await gameModel
      .findById(id)
      .select("members.memberid members.isOnline members.isAlive room")
      .populate("members.memberid", "_id name email");

    res.json(game);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

const getListGames = async (req: CustomRequest, res: Response) => {
  try {
    const { _id } = (req.user as { _id: string }) || {};
    if (!_id) {
      return responseBadRequest(res);
    }

    const result = await gameModel
      .find({
        "members.memberid": _id,
      })
      .select(
        "members.memberid members.isOnline members.isAlive room datecreate"
      );

    res.json(result);
  } catch (e) {
    return responseError(res, { status: 500, title: "Oh no, something wrong" });
  }
};

export { createGame, getDetailGame, getListGames };
