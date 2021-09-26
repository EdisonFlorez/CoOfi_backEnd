const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors')
// configuraciones
server.set('port', process.env.PORT || 3000);
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
    console.log("funciona");
} );


