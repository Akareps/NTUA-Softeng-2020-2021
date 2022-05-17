const database = require('../database/database');
const db = database.db;
const path = require('path');
const fs = require("fs");
const css = {
    style: fs.readFileSync('./../front-end/style.css', 'utf8')
};

class perPointCtr{
    PerPoint(req, res){
        let pointId = req.params.pointID;
        let date_from = req.params.yyyymmdd_from;
        let date_to = req.params.yyyymmdd_to;
        if(pointId === undefined || date_from === undefined || date_to === undefined){
            res.status(400).send("Bad request");
        }
        else{
            let format = req.query.format;
            let sql;
            sql = `SELECT connection_time, disconnection_time, kWh, type, history_id
               FROM softeng2021.charging_history, softeng2021.electric_cars
               WHERE softeng2021.charging_history.car_id = softeng2021.electric_cars.car_id
               and softeng2021.charging_history.point_id = '${pointId}'
               and softeng2021.charging_history.modifiedAt >= '${date_from}'
               and softeng2021.charging_history.modifiedAt <= '${date_to}'`
            db.query(sql, (err, result)=>{
                if(err) throw err;
                else{
                    let i;
                    for(i = 0; i < result.length; i++){
                        result[i]["SessionIndex"] = (i+1).toString();
                    }
                    if(format === undefined || format === 'json') {
                        res.status(200).send(result);
                    }
                    else{
                        let final_result = new Array(result.length+1);
                        final_result[0] = `SessionIndex, connection time, disconnection time, kWh, Type, history_id`;
                        for(i=1; i < result.length+1; i++){
                            final_result[i] = `${result[i-1]["SessionIndex"]}, ${result[i-1]["connection_time"]}, ${result[i-1]["disconnection_time"]}, ${result[i-1]["kWh"]}, ${result[i-1]["type"]}, ${result[i-1]["history_id"]}'`;
                        }
                        res.status(200).send(final_result);
                    }
                }
            })
        }
    }
}
const controller = new perPointCtr();
module.exports = controller;