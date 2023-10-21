import mongoose, { Document, Schema } from "mongoose";

interface IRoom extends Document {
  members: Array<string>,
  cards: Array<string>,
  type: 'NORMAL' | 'PREMIUM',
  name?: string;
}

const roomSchema: Schema<IRoom> = new Schema<IRoom>({
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  cards: [{
    type: String,
  }],
  type: {
    type: String,
    default: 'NORMAL'
  },
  name: {
    type: String,
  }
});

const Room = mongoose.model<IRoom>("Room", roomSchema);

export default Room;
export { IRoom };
