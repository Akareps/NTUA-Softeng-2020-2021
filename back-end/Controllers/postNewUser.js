const database = require('../database/database');
const db = database.db;

class postNewUserCtr{
    postNewUser(req,res){
        let sql;
        let username = req.params.username;
        let password = req.params.password;
        sql = `SELECT first_name from softeng2021.owners where owners.user_name = '${username}'`
        db.query(sql, (err,results)=>{
            if(err) throw err;
            else if(results[0] === undefined){
                sql =`INSERT INTO softeng2021.owners (user_name, password) VALUES ('${username}', '${password}')`
                db.query(sql, (err,results2)=> {
                    if(err) throw err;
                    else {
                        let sql1 = `SELECT owner_id
                                    FROM softeng2021.owners
                                    WHERE owners.user_name = '${username}'`
                        db.query(sql1, (err, resu)=>{
                            if(err) throw err;
                            else{
                                let apikey = resu[0].owner_id;
                                while(apikey.length !== 14){
                                    if(apikey.length === 4 || apikey.length === 9)
                                        apikey += '-'
                                    apikey += '0';
                                }
                                res.status(200).send(`Added User with Apikey ${apikey}`)
                            }
                        })
                    }
                })
            }
            else{
                sql =`UPDATE softeng2021.owners 
                SET owners.password = '${password}'
                WHERE owners.user_name = '${username}'`

                db.query(sql, (err,results2)=> {
                    if(err) throw err;
                    else {
                        let sql1 = `SELECT owner_id
                                    FROM softeng2021.owners
                                    WHERE owners.user_name = '${username}'`
                        db.query(sql1, (err, resu)=>{
                            if(err) throw err;
                            else{
                                let apikey = resu[0].owner_id;
                                while(apikey.length !== 14){
                                    if(apikey.length === 4 || apikey.length === 9)
                                        apikey += '-'
                                    apikey += '0';
                                }
                                res.status(200).send(`Updated User with Apikey ${apikey}`)
                            }
                        })
                    }
                })

            }
        });
    }
}


const controller = new postNewUserCtr();
module.exports = controller;

