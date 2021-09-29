import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
const server = express();

// configuracionesn del puerto
server.set("port", process.env.PORT || 4000);

// conexión base de datos MongoAtlas
const uri =
  'm"mongodb+srv://dbUser:OAyQXFoAmqEcXk15@cluster0.wsmyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, options).then(
  () => {
    console.log("Conectado a la base de datos.");
  },
  (err) => {
    console.log(err);
  }
);
// middlewares
server.use(morgan("tiny"));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// rutas

// middleware Vue
const history = require("connect-history-api-fallback");
server.use(history());

// configura la carpeta a la que va a acceder.
server.use(express.static(__dirname + "/public"));

// configuración del puerto donde está escuchando
server.listen(server.get("port"), () => {
  console.log("Funciona en el puerto " + server.get("port"));
});
