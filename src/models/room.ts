import mongoose, { Document, Schema } from "mongoose";

interface IRoom extends Document {
  members: Array<string>,
  cards: Array<string>
}

const roomSchema: Schema<IRoom> = new Schema<IRoom>({
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  cards: [{
    type: Schema.Types.ObjectId,
    ref: 'Card',
    required: true
  }]
});

const Room = mongoose.model<IRoom>("Room", roomSchema);

export default Room;
export { IRoom };
