import { Server, Socket } from "socket.io";

type userRoom = {
  roomid: string,
  userid: string
}

const setupSocketListeners = (io: Server, socket: Socket) => {
  let list: any[] = [];
  
  socket.on('joinRoom', (data: userRoom) => {
    socket.join(data.roomid);
    io.to(data.roomid).emit('confirmJoinRoom', data.userid);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
};

export default setupSocketListeners;
