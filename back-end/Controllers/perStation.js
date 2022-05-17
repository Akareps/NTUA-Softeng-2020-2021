const database = require('../database/database');
const db = database.db;

class perStationCtr{
    PerStation(req, res){
        let station_id = req.params.stationID;
        let date_from = req.params.yyyymmdd_from;
        let date_to = req.params.yyyymmdd_to;
        if(station_id === undefined || date_from === undefined || date_to === undefined){
            res.status(400).send("Bad request");
        }
        else{
            let format = req.query.format;
            let sql;
            sql = `SELECT point_id, SUM(kWh) as EnergyDelivered, COUNT(point_id) as PointSessions
                   FROM softeng2021.charging_history
                   WHERE softeng2021.charging_history.station_id = '${station_id}'
                   and softeng2021.charging_history.modifiedAt >= '${date_from}'
                   and softeng2021.charging_history.modifiedAt <= '${date_to}'
                   GROUP BY point_id`
            db.query(sql, (err, result)=>{
                if(err) throw err;
                else{
                    if(format === undefined || format === 'json') {
                        res.status(200).send(result);
                    }
                    else{
                        let i;
                        let final_result = new Array(result.length+1);
                        final_result[0] = `point_id, Energy Delivered, PointSessions`;
                        for(i=1; i < result.length+1; i++){
                            final_result[i] = `${result[i-1]["point_id"]}, ${result[i-1]["EnergyDelivered"]}, ${result[i-1]["PointSessions"]}`;
                        }
                        res.status(200).send(final_result);
                    }
                }
            });
        }
    }
}
const controller = new perStationCtr();
module.exports = controller;