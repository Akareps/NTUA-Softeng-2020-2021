const database = require('../database/database');
const db = database.db;


class getUserInformationCtr{
    getUserInformation(req,res){
        let sql;
        let username = req.params.username;
        console.log(username);
        sql = `SELECT owner_id, first_name, last_name, date_of_birth, Bonus_points, country, city, address, postal_code from softeng2021.owners where owners.user_name = '${username}'`

        db.query(sql, (err, results) => {
            if (err) throw err;
            else {
                if (results[0] === undefined) {
                    res.status(400).send("Bad request");
                }
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
                    let format = req.query.format;

                    let apikey = id.toString();
                    while(apikey.length !== 14){
                        if(apikey.length === 4 || apikey.length === 9)
                            apikey += '-'
                        apikey += '0';
                    }

                    if (format === undefined || format === "json") {
                        res.send({
                            first_name: fname,
                            last_name: lname,
                            date: date,
                            bonus: bonus,
                            country: country,
                            city: city,
                            address: address,
                            postal_code: postal_code,
                            apikey: apikey
                        });
                    } else{
                      const resp = `first name, last name, date of birth, bonus, country, city, address, postal code, apikey \n${fname}, ${lname}, ${date}, ${bonus}, ${country}, ${city}, ${address},  ${postal_code}, ${apikey}`
                        res.status(200).send(resp);
                    }
                }
            }
        })
    }
}
const controller = new getUserInformationCtr();
module.exports = controller;