const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"] //array with "GET" and "POST"
  } //options object
})

app.use(cors());

io.on("connection", (socket) => {
  //socket handlers are listen below = 4 are there

  socket.emit("me", socket.id); //for user to know who he is

  socket.on('disconnect', () => {
    socket.broadcast.emit("callEnded");
  }) //for disconnection

  socket.on('callUser', ({ userToCall, name, from, signalData }) => {
    io.to(userToCall).emit('callUser', { signal: signalData, from, name });
  })

  socket.on('answerCall', (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  })
})
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => { res.send("Server is running.") });
server.listen(PORT, () => console.log('Sever is running on port ', PORT));
