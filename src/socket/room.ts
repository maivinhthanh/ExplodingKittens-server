import { Server, Socket } from 'socket.io';

const startNewGame = (payload: any) => {
  // ...
};

const confirm = (orderId: string, callback: (response: any) => void) => {
  // ...
};

const setupSocketListeners = (io: Server, socket: Socket) => {
  socket.on('room:startNewGame', startNewGame);
  socket.on('room:confirm', confirm);
};

export default setupSocketListeners;
