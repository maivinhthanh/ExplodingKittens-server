import mongoose, { Document, Schema } from "mongoose";

interface MemberGame {
  memberid: string,
  isOnline: boolean,
  isAlive: boolean,
  cards: Array<string>
}

interface IGame extends Document {
  members: Array<MemberGame>,
  drawCards: Array<string>,
  usedCards: Array<string>,
  winner?: Schema.Types.ObjectId,
  runnerUp?: Schema.Types.ObjectId,
  room: Schema.Types.ObjectId
}

const gameSchema: Schema<IGame> = new Schema<IGame>({
  members: [{
      memberid: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
      },
      isOnline: {
        type: Boolean,
        default: true,
      },
      isAlive: {
        type: Boolean,
        default: true,
      },
      cards: {
        type: [String],
        default: ['DEFUSE'],
      },
  }],
  drawCards: [{
    type: String,
  }],
  usedCards: {
    type: [String],
    default: [],
  },
  winner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  runnerUp: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Room',
  }
});

const Game = mongoose.model<IGame>("Game", gameSchema);

export default Game;
export { IGame, MemberGame };
