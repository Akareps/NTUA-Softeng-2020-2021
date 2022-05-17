const database = require('../../database/database');
const db = database.db;

var  PerStationmock=function (station_id, date_from, date_to){
            let sql;
            let flag=true
            sql = `SELECT point_id, SUM(kWh) as EnergyDelivered, COUNT(point_id) as PointSessions
                   FROM softeng2021.charging_history
                   WHERE softeng2021.charging_history.station_id = '${station_id}'
                   and softeng2021.charging_history.modifiedAt >= '${date_from}'
                   and softeng2021.charging_history.modifiedAt <= '${date_to}'
                   GROUP BY point_id`
            db.query(sql, (err, result)=>{
                if(err) flag=false;
                else{
                        let i;
                        let final_result = new Array(result.length+1);
                        final_result[0] = `point_id, Energy Delivered, PointSessions`;
                        for(i=1; i < result.length+1; i++){
                            final_result[i] = `${result[i-1]["point_id"]}, ${result[i-1]["EnergyDelivered"]}, ${result[i-1]["PointSessions"]}`;
                        }
                    }
            });
    if (flag) return 1
    else return 0;
}
module.exports= {
    perStation: PerStationmock
}
