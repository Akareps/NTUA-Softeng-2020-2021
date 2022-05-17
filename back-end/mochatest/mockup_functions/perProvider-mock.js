const database = require('../../database/database');
const db = database.db;


  var PerProvidermock=function (provider_id, date_from, date_to){
      let flag=true
            let sql;
            sql = `SELECT connection_time, disconnection_time, kWh, history_id, company, car_id, total_cost
               FROM softeng2021.charging_history, softeng2021.charging_point_energy_providers, softeng2021.energy_providers
               WHERE softeng2021.charging_history.point_id = softeng2021.charging_point_energy_providers.point_id
               and softeng2021.energy_providers.provider_id = '${provider_id}'
               and softeng2021.charging_point_energy_providers.providers_id = '${provider_id}'
               and softeng2021.charging_history.modifiedAt >= '${date_from}'
               and softeng2021.charging_history.modifiedAt <= '${date_to}'`
            db.query(sql, (err, result)=> {
                if (err) flag = false;
                else {
                    let i;
                    for (i = 0; i < result.length; i++) {
                        result[i]["SessionIndex"] = i + 1;
                        result[i]["CostPerkWh"] = result[i]["total_cost"] / result[i]["kWh"];
                    }
                    {
                        let final_result = new Array(result.length + 1);
                        final_result[0] = `SessionIndex, connection time, disconnection time, kWh, Type, history_id, Company, car_id, Total Cost`;
                        for (i = 1; i < result.length + 1; i++) {
                            final_result[i] = `${result[i - 1]["SessionIndex"]}, ${result[i - 1]["connection_time"]}, ${result[i - 1]["disconnection_time"]}, ${result[i - 1]["kWh"]}, ${result[i - 1]["company"]}, ${result[i - 1]["history_id"]}, ${result[i - 1]["car_id"]}, ${result[i - 1]["total_cost"]}`;
                        }
                    }
                }
            })
      if (flag) return 1
      else return 0;
  }
module.exports= {
    perProvider: PerProvidermock
}

