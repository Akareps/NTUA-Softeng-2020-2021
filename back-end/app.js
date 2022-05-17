const express = require('express');
const app = express();
const router = require('./routes/index.js');
const bodyParser = require("body-parser");
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname.slice(0, -9) + '/front-end/views');
app.use(bodyParser.urlencoded({ extended: false}));
//app.use(bodyParser.json());
app.use(router);
const https = require('https')
const fs = require('fs')


const httpsOptions = {
    key: fs.readFileSync('./security/cert.key'),
    cert: fs.readFileSync('./security/cert.pem')
}

const PORT = 8765;
const server = https.createServer(httpsOptions, app)

    .listen(PORT, () => {
        console.log('server running at ' + PORT)
    })