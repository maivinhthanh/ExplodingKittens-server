import { signToken } from "../middleware/jwt-service";
import userModel, { IUser } from "../models/user";

const checkUserExist = async (email: string) => {
  try {
    const listUsers = await userModel.find({ email });
    if (listUsers.length === 0) {
      return false;
    }
    return true;
  } catch (e) {
    return true;
  }
};

const createToken = async (user: IUser) => {
  const { _id, name, email, picture, hidden } = user;
  const dataConfig = { _id, name, email, picture, hidden };
  return await signToken(dataConfig);
};
export { checkUserExist, createToken };
