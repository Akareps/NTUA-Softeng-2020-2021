const database = require('../../database/database');
const db = database.db;


var postNewUsermock=  function (username,password){
    let flag=true
    let sql;
    sql = `SELECT first_name from softeng2021.owners where owners.user_name = '${username}'`
    db.query(sql, (err,results)=>{

        if(err) flag=false
        else if(results[0] === undefined){
            sql =`INSERT INTO softeng2021.owners (user_name, password) VALUES ('${username}', '${password}')`
            db.query(sql, (err,results2)=> {
                if(err) flag=false;
                else {
                    let sql1 = `SELECT owner_id
                                    FROM softeng2021.owners
                                    WHERE owners.user_name = '${username}'`
                    db.query(sql1, (err, resu)=>{
                        if(err) flag=false;
                    })
                }
            })
        }
        else{
            sql =`UPDATE softeng2021.owners 
                SET owners.password = '${password}'
                WHERE owners.user_name = '${username}'`
            db.query(sql, (err,results2)=> {
                if(err) flag=false;
                else {
                    let sql1 = `SELECT owner_id
                                    FROM softeng2021.owners
                                    WHERE owners.user_name = '${username}'`
                    db.query(sql1, (err, resu)=>{
                        if(err) flag=false;
                    })
                }
            })

        }
    });
    if (flag)
        return 1;
    else return 0;
}

module.exports= {
    post: postNewUsermock
}