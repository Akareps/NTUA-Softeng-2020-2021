const database = require('../../database/database');
const db = database.db;

var PerPointmock=function (pointId,date_from, date_to){
    let flag=true
        let sql;
        sql = `SELECT connection_time, disconnection_time, kWh, type, history_id
               FROM softeng2021.charging_history, softeng2021.electric_cars
               WHERE softeng2021.charging_history.car_id = softeng2021.electric_cars.car_id
               and softeng2021.charging_history.point_id = '${pointId}'
               and softeng2021.charging_history.modifiedAt >= '${date_from}'
               and softeng2021.charging_history.modifiedAt <= '${date_to}'`
        db.query(sql, (err, result)=>{
            if(err) flag=false
            else{
                let i;
                for(i = 0; i < result.length; i++){
                    result[i]["SessionIndex"] = (i+1).toString();
                }
                    let final_result = new Array(result.length+1);
                    final_result[0] = `SessionIndex, connection time, disconnection time, kWh, Type, history_id`;
                    for(i=1; i < result.length+1; i++){
                        final_result[i] = `${result[i-1]["SessionIndex"]}, ${result[i-1]["connection_time"]}, ${result[i-1]["disconnection_time"]}, ${result[i-1]["kWh"]}, ${result[i-1]["type"]}, ${result[i-1]["history_id"]}'`;
                    }
                }
        })
    if (flag) return 1
    else return 0;
}
module.exports= {
    perPoint: PerPointmock
}