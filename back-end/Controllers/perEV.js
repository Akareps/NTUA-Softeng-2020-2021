const database = require('../database/database');
const db = database.db;

class perEVCtr{
    PerEV(req,res){
        let car_id = req.params.car_id;
        let date_from = req.params.yyyymmdd_from;
        let date_to = req.params.yyyymmdd_to;
        if(car_id === undefined || date_from === undefined || date_to === undefined){
            res.status(400).send("Bad request");
        }
        else{
            let sql;
            let format = req.query.format;
            sql = `SELECT connection_time, disconnection_time, kWh, type, history_id, total_cost, company
               FROM softeng2021.charging_history, softeng2021.electric_cars, softeng2021.charging_point_energy_providers, softeng2021.energy_providers
               WHERE softeng2021.charging_history.car_id = softeng2021.electric_cars.car_id
               and softeng2021.charging_history.point_id = softeng2021.charging_point_energy_providers.point_id
               and softeng2021.charging_point_energy_providers.providers_id = softeng2021.energy_providers.provider_id
               and softeng2021.charging_history.car_id = '${car_id}'
               and softeng2021.charging_history.modifiedAt >= '${date_from}'
               and softeng2021.charging_history.modifiedAt <= '${date_to}'`
            db.query(sql, (err, result)=>{
                if(err) throw err;
                else{
                    let i;
                    for(i = 0; i < result.length; i++){
                        result[i]["SessionIndex"] = i+1;
                        result[i]["CostPerkWh"] = result[i]["total_cost"]/result[i]["kWh"];
                    }
                    if(format === undefined || format === 'json') {
                        res.status(200).send(result);
                    }
                    else{
                        let final_result = new Array(result.length+1);
                        final_result[0] = `SessionIndex, connection time, disconnection time, kWh, Type, history_id, Company, Total Cost, Cost Per kWh`;
                        for(i=1; i < result.length+1; i++){
                            final_result[i] = `${result[i-1]["SessionIndex"]}, ${result[i-1]["connection_time"]}, ${result[i-1]["disconnection_time"]}, ${result[i-1]["kWh"]}, ${result[i-1]["type"]}, ${result[i-1]["history_id"]}, ${result[i-1]["company"]}, ${result[i-1]["total_cost"]}, ${result[i-1]["CostPerkWh"]}`
                        }
                        res.status(200).send(final_result);
                    }
                }
            })
        }
    }
}
const controller = new perEVCtr();
module.exports = controller;