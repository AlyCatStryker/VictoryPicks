// backend/server.js

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

// Configure CORS if your frontend is on a different domain/port.
const io = new Server(server, {
  cors: {
    origin: "*", // For testing only. In production, specify your domain.
    methods: ["GET", "POST"]
  }
});

// Listen for connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for the newSubmission event from clients
  socket.on("newSubmission", (wallet) => {
    console.log("New submission from:", wallet);
    // Broadcast the new submission event to all connected clients
    io.emit("newSubmission", wallet);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Socket.io server running on port ${PORT}`);
});