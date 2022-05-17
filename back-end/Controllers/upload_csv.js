const database = require('../database/database');
const db = database.db;
const path = require("path");
const fs = require("fs");
const csv = require("fast-csv");

class upload_csvCtl{
    UploadCsv(req, res){
        let total_add = 0;
        let format = req.query.format;
        if (req.query.file === undefined) {
            return res.status(400).send("Please upload a CSV file!");
        }
        else{
            let path1 = path.join(require('os').homedir(), req.query.file);
            fs.createReadStream(path1)
                .pipe(csv.parse({ headers: true }))
                .on("error", (error) => {
                    throw error.message;
                })
                .on("data", (row) => {
                    let car_id = row["car_id"];
                    let point_id = row["point_id"];
                    let owner_id = row["owner_id"];
                    let station_id = row["station_id"];
                    let connection_time = row["connection_time"];
                    let disconnection_time = row["disconnection_time"];
                    let finished_charging_time = row["finished_charging_time"];
                    let kWh = row["kWh"];
                    let modifiedAt = row["modifiedAt"];
                    let paymentRequired = row["paymentRequired"];
                    let total_cost = row["total_cost"];
                    console.log(total_cost);
                    let sql;
                    total_add +=1;
                    sql = `INSERT INTO softeng2021.charging_history(car_id, point_id, owner_id, station_id, connection_time, disconnection_time, finished_charging_time, kWh, modifiedAt, paymentRequired, total_cost) VALUES (${car_id}, ${point_id}, ${owner_id}, ${station_id}, '${connection_time}, '${disconnection_time}, '${finished_charging_time}, ${kWh}, '${modifiedAt}, ${paymentRequired}, ${total_cost})`;
                    db.query(sql,(err,result)=>{
                        if(err) throw err;
                    })
                })
                .on("end", ()=>{
                    let SessionsInUploadedFile = total_add;
                    let SessionsImported = total_add;
                    let sql;
                    sql = ` SELECT COUNT(history_id) as TotalSessionsInDatabase
                    FROM softeng2021.charging_history`;
                    db.query(sql, (err, results)=>{
                        if(err) throw err;
                        else{
                            let totalses = results[0]["TotalSessionsInDatabase"]
                            console.log(format)
                            if(format === 'json' || format === undefined){
                                res.status(200).send({
                                    SessionsInUploadedFile: SessionsInUploadedFile,
                                    SessionsImported: SessionsImported,
                                    TotalSessionsInDatabase: totalses
                                })
                            }
                            else{
                                let result = `SessionsInUploadedFile, SessionsImported Delivered, TotalSessionsInDatabase \n${SessionsInUploadedFile}, ${SessionsImported}, ${totalses}`;
                                res.status(200).send(result);
                            }
                        }
                    })

                })
        }
    }
}
const controller = new upload_csvCtl();
module.exports = controller;