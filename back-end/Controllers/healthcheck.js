const database = require('../database/database');
const mysql = require('mysql');
const db = database.db;
const path = require('path');
const fs = require("fs");
const jwt = require('jsonwebtoken');
const css = {
    style: fs.readFileSync('./../front-end/style.css', 'utf8')
};

class healthcheckCtr{
    async healthcheck(req, res) {
        let pool = mysql.createPool({
            connectionLimit: 20,
        });
        const result = await pool.query(`SELECT * from softeng2021`)
        if (!result) {
            res.send({
                status: "failed",
            });
        } else {
            res.send({
                status: "OK",
            });
        }

    }
}
const controller = new healthcheckCtr();
module.exports = controller;