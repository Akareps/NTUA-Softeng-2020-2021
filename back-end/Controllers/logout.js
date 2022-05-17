const database = require('../database/database');
const mysql = require('mysql');
const db = database.db;
const path = require('path');
const fs = require("fs");
const jwt = require('jsonwebtoken');
const {render} = require("ejs");
const css = {
    style: fs.readFileSync('./../front-end/style.css', 'utf8')
};


class logoutCtr{
    logoutUser(req,res) {
        res.sendFile(path.join(__dirname,'../../front-end/','userLogin.html'));
    }
}

const controller = new logoutCtr();
module.exports = controller;