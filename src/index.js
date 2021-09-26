const express = require('express');
const server = express();
const morgan = require('morgan');
// configuraciones
server.set('port', process.env.PORT || 3000);
// middlewares
server.use(morgan('tiny'));
server.use(express.json()); 
server.use(express.urlencoded({extended : true}));

// configura la carpeta a la que va a acceder.
server.use(express.static(__dirname + '/public'));

// configuración del puerto donde está escuchando
server.listen(server.get('port'), () => {
    console.log("funciona");
} );


//token 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