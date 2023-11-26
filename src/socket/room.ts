import { Server, Socket } from "socket.io";

type userRoom = {
  roomid: string,
  userid: string
}

type gameRoom = {
  roomid: string,
  gameid: string
}

const setupSocketListeners = (io: Server, socket: Socket) => {
  let list: any[] = [];
  
  socket.on('joinRoom', (data: userRoom) => {
    socket.join(data.roomid);
    io.to(data.roomid).emit('confirmOnline', data.userid);
  });

  socket.on('getReady', (data: userRoom) => {
    io.to(data.roomid).emit('confirmJoinRoom', data.userid);
  });

  socket.on('startGame', (data: gameRoom) => {
    io.to(data.roomid).emit('onGame', data.gameid);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
};

export default setupSocketListeners;
