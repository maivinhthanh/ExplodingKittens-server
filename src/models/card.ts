import mongoose, { Document, Schema } from "mongoose";

interface ICard extends Document {
  name: string;
  code: string;
  type: string;
  method: string;
  limitted: number;
  times?: number;
  logo?: string;
  image?: string;
}

const cardSchema: Schema<ICard> = new Schema<ICard>({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
  type: {
    type: String,
  },
  method: {
    type: String,
  },
  limitted: {
    type: Number,
  },
  times: { type: Number },
  logo: { type: String, default: null },
  image: { type: String, default: null },
});

const Card = mongoose.model<ICard>("Card", cardSchema);

export default Card;
export { ICard };
