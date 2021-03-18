require('dotenv').config()
const express = require('express');
const app = express();
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const port = process.env.PORT
const db_url = process.env.DB_URL


mongoose.Promise = global.Promise;
mongoose.connect(db_url, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


app.use(helmet());
app.use(morgan('combined'))
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('./routes/userRoute'))

app.listen(port, function(){
  console.log('Server is running on Port:',port);
});


module.exports= app 