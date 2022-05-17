const database = require('../../../back-end/database/database');
const db = database.db;


var ResetSessionsmock= function (){
    let flag=true
    let sql;
    sql = `TRUNCATE TABLE softeng2021.charging_history;`;
    db.query(sql, (err, results) => {
        if (err)
            flag=false
    })
    if (flag) return 1
    else return 0;
}
module.exports= {
    Reset: ResetSessionsmock
}
