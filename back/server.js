const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const keys = require('./configs/keys')
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
require('./routes/routes')(app)

mongoose.connect(keys.mongodb.dbURI)
var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('Connection Succeeded')
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
