const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();
const path = require('path')
const app = express();
const router = require('./mainFolder/Router/router');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', router)


app.use(express.static(path.join(__dirname, 'mainFolder')));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'mainFolder', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log("you're connected")
});