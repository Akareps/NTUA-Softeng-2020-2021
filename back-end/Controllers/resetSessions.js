const database = require('../database/database');
const db = database.db;

class resetSessionCtr{
    ResetSessions(req, res){
        let sql;
        sql = `TRUNCATE TABLE softeng2021.charging_history;`;
        db.query(sql, (err, results) => {
            if (err)
                res.send({
                    status: "failed",
                });
            else
                res.send({
                    status: "OK",
                });

        })
    }
}
const controller = new resetSessionCtr();
module.exports = controller;