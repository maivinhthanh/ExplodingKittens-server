import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createServer } from "node:http";
import { Server, Socket } from "socket.io";

import * as database from "./database";

import registerRoomHandlers from "./socket/room";

import userRoutes from "./routes/user";
import roomRoutes from "./routes/room";
import cardRoutes from "./routes/card";
import gameRoutes from "./routes/game";

const app = express();
const server = createServer(app);
const port = process.env.PORT || 3000;
const portSocket = 4000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({origin: '*'}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});

app.use("/users", userRoutes);
app.use("/rooms", roomRoutes);
app.use("/cards", cardRoutes);
app.use("/games", gameRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

const init = async () => {
  await database.init();
};

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

const io = new Server({
  cors: {
    origin: "http://127.0.0.1:5173",
  },
});

const onConnection = (socket: Socket) => {
  registerRoomHandlers(io, socket);
};

io.on("connection", onConnection);

io.listen(portSocket);

server.listen(port, () => {
  init();
  console.log(`Server running at http://localhost:${port}`);
});
