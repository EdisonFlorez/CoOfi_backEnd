// npm install nodemon --save-dev

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
// mongodb+srv://dbUser:OAyQXFoAmqEcXk15@cluster0.wsmyw.mongodb.net/CoOfi?retryWrites=true&w=majority
// mongodb://localhost/mev-database
mongoose.connect('mongodb+srv://dbUser:OAyQXFoAmqEcXk15@cluster0.wsmyw.mongodb.net/CoOfi?retryWrites=true&w=majority')
.then(db => console.log('DB is conected'))
.catch(err => console.error(err));


// Settings
app.set('port',process.env.PORT || 4000);
// Middlewares
app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use('/offers',require('./routes/offers'));

// Static files
//console.log(__dirname + '/public')
app.use(express.static(__dirname + '/public'))


// Server is listening
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'))
});