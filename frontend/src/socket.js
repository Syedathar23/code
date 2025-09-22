import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    forceNew: true,                // correct key name
    reconnectionAttempts: Infinity, // was typo: reconnectionAttempt
    timeout: 10000,
    transports: ["websocket"],
    withCredentials: true,
  };

  return io("https://code-3-9e3z.onrender.com/", options);
};
