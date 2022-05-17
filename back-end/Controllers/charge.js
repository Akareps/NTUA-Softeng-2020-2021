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

class charging{
    charge(req,res) {
        const energy = req.body.energy;
        const carid = req.body.carid;
        const ownerid = req.body.ownerid;
        const pointid = req.body.pointid;
        const stationid = req.body.stationid;
        const username = req.body.username
        let paynow = 0;
        if(req.body.payment === undefined)
            paynow = 1;
        let today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const day = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        today.setMinutes(today.getMinutes()+2);
        const date2 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let sql, sql2;
        sql2 = `SELECT * FROM softeng2021.owners WHERE owners.owner_id = '${ownerid}' AND owners.user_name = '${username}'`;
        sql = `INSERT INTO softeng2021.charging_history(car_id, point_id, owner_id, station_id, connection_time, disconnection_time, kWh, modifiedAt, paymentRequired, total_cost) VALUES ('${carid}', '${pointid}', '${ownerid}', '${stationid}', '${date}', '${date2}', '${energy}', '${day}', '${paynow}', '${energy*0.10}')`;
        db.query(sql2, (err,results)=>{
            if(err || results[0]===undefined) {
                console.log(err);
                res.status(401).send("FRAUD ATTEMPT! CALLING POLICE!");
            }
            else {
                db.query(sql, (err)=>{
                    if(err) {
                        res.status(401).send("Wrong Details");
                    }
                    else {
                        res.status(200).render('successful_charge', {
                            table: path.basename(__filename, '.js'),
                            token: req.body.token, css: css, username: username
                        });
                    }
                });
            }
        });
    }
}

const controller = new charging();
module.exports = controller;