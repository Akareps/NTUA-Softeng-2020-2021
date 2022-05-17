const database = require('../../database/database');
const db = database.db;

var getUserInformationmock=function (username){
    let sql;
    let flag=true;
    sql =  `SELECT owner_id, first_name, last_name, date_of_birth, Bonus_points, country, city, address, postal_code from softeng2021.owners where owners.user_name = '${username}'`

    db.query(sql, (err, results) => {
        if (err) flag=false;
        else {
            const fname = results[0].first_name;
            const lname = results[0].last_name;
            const date = results[0].date_of_birth;
            const bonus = results[0].Bonus_points;
            const country = results[0].country;
            const city = results[0].city;
            const address = results[0].address;
            const postal_code = results[0].postal_code;
            const id = results[0].owner_id;
            let apikey = id.toString();
            while(apikey.length !== 14){
                if(apikey.length === 4 || apikey.length === 9)
                    apikey += '-'
                apikey += '0';
            }
        }
    })
    if (flag) return 1
    else return 0;
}
module.exports= {
    get: getUserInformationmock
}