import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  description: string;
  picture: string | null;
  hidden: boolean;
  isonline: boolean;
  coin: number;
  level: number;
  score: number;
  datecreate: Date;
  dateedit?: Date;
}

const userSchema: Schema<IUser> = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  picture: {
    type: String,
    default: null,
  },
  hidden: { type: Boolean, default: false },
  isonline: { type: Boolean, default: false },
  coin: { type: Number, default: 0 },
  datecreate: { type: Date, default: Date.now },
  dateedit: { type: Date },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
export { IUser };
