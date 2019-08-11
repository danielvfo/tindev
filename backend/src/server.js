const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const httpServer = express();
const server = require('http').Server(httpServer);
const io = require('socket.io');

io.on('connection', socket => {
  console.log('Nova conexão', socket.id);
});

mongoose.connect('mongodb+srv://tindev:tindevloko@dancluster-logmj.gcp.mongodb.net/tindev?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

httpServer.use(cors());
httpServer.use(express.json());
httpServer.use(routes);

server.listen(3333);
