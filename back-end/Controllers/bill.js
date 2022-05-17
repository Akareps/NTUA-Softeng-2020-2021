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

class billing{
    bill(req,res) {
        const ownerid = req.body.ownerid;
        const dateFrom = req.body.datefrom;
        const dateTo = req.body.dateto;
        const username = req.body.username
        let sql;
        sql = `SELECT car_id, point_id, station_id, connection_time, disconnection_time, finished_charging_time, kWh, modifiedAt, total_cost FROM softeng2021.charging_history WHERE owner_id = ${ownerid} AND paymentRequired = 1 AND (modifiedAt BETWEEN '${dateFrom}' AND '${dateTo}')`;
        db.query(sql, (err, results)=>{
            if(err) {
                res.status(401).send("Wrong Details");
            }
            else {
                let i, tot=0, resp = new Array(11);
                for(i=0;i<11;i++)
                    resp[i] = new Array(results.length);
                resp[0] = ['car_id', 'point_id', 'station_id', 'connection_time', 'disconnection_time', 'finished_charging_time', 'kWh', 'modifiedAt', 'total_cost'];
                for(i=0;i<results.length;i++) {
                    resp[i+1][0] = results[i].car_id;
                    resp[i+1][1] = results[i].point_id;
                    resp[i+1][2] = results[i].station_id;
                    resp[i+1][3] = results[i].connection_time;
                    resp[i+1][4] = results[i].disconnection_time;
                    resp[i+1][5] = results[i].finished_charging_time;
                    resp[i+1][6] = results[i].kWh;
                    resp[i+1][7] = results[i].modifiedAt;
                    resp[i+1][8] = results[i].total_cost;
                    tot += results[i].total_cost;
                }

                res.status(200).render('show_data_as_csv', {
                    table: path.basename(__filename, '.js'),
                    token: req.body.token, css: css, username: username, item: resp, total: tot, length: results.length
                });
            }
        });
    }
}

const controller = new billing();
module.exports = controller;