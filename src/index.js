import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const server = express();

// configuracionesn del puerto
server.set('port', process.env.PORT || 3000);

// conexión base de datos

// middlewares
server.use(morgan('tiny'));
server.use(cors());
server.use(express.json()); 
server.use(express.urlencoded({extended : true}));

// rutas 

// middleware Vue
const history = require('connect-history-api-fallback');
server.use(history());

// configura la carpeta a la que va a acceder.
server.use(express.static(__dirname + '/public'));

// configuración del puerto donde está escuchando
server.listen(server.get('port'), () => {
    console.log("Funciona en el puerto " + server.get('port'));
} );


