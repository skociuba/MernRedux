const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const key = require('./config/keys');
const app = express();
const cors = require('cors')
app.use(bodyParser.json());

mongoose
.connect( key.mongoURI ,{ useNewUrlParser: true } )
.then(()=>console.log('MongoDB Connected... '))
.catch(err=>console.log(err));
app.use(cors())
app.use('/api/items',items);

const port = process.env.PORT || 5000;

app.listen(port, () =>console.log( `Server running on port ${port}`));
