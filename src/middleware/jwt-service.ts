import jwt from "jsonwebtoken";

const jwtSecretKey = 'skdjfwhfcn,jhckjwhfmn.5723rjnF$R:>:"LO@#423iujfas';

interface TokenPayload {
  data: any;
}

const verifyToken = async (token: string): Promise<TokenPayload | Error> => {
  try {
    return (await jwt.verify(token, jwtSecretKey)) as TokenPayload;
  } catch (err) {
    return err as Error;
  }
};

const signToken = async (
  data: any
): Promise<{ accessToken: string; refreshToken: string } | Error> => {
  try {
    const accessToken = await jwt.sign({ data }, jwtSecretKey, {
      expiresIn: 30 * 24 * 60 * 60,
      algorithm: "HS256",
    });
    const refreshToken = await jwt.sign({ data }, jwtSecretKey, {
      algorithm: "HS256",
    });
    return { accessToken, refreshToken };
  } catch (err) {
    return err as Error;
  }
};

const decodeToken = async (token: string): Promise<TokenPayload | Error> => {
  try {
    const decoded = (await jwt.decode(token)) as TokenPayload;
    return decoded;
  } catch (err) {
    return err as Error;
  }
};

export { verifyToken, decodeToken, signToken };
