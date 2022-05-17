const database = require('../database/database');
const mysql = require('mysql');
const db = database.db;
const path = require('path');
const fs = require("fs");
const jwt = require('jsonwebtoken');
const css = {
    style: fs.readFileSync('./../front-end/style.css', 'utf8')
};



class Login {

//Login-Logout
//Login
    loginUser(req, res){

        let username = req.body.uname;
        let password = req.body.pw;

        if(username !== undefined && password !== undefined){
            let sql;
            sql = `SELECT first_name, user_type, last_name from softeng2021.owners where owners.user_name = '${username}' AND owners.password = '${password}'`
            db.query(sql, (err,results)=>{
                if(err) throw err;
                if(results[0]===undefined) {
                    res.status(401).send("Wrong Username or Password");
                }
                else {
                    let token;
                    if(results[0].user_type==="user") {
                        token = jwt.sign({username: username, user_type: "user"}, "monopetreleobro",
                            {
                                expiresIn: 86400 // expires in 24 hours
                            }
                        );
                        res.status(200).header('XOBSERVATORY-AUTH',token).render('user_charging', {
                            table: path.basename(__filename, '.js'),
                            token: token, css: css, firstName: results[0].first_name, username: username
                        });
                    }
                    else if(results[0].user_type==="provider") {
                        token = jwt.sign({username: username, user_type: "banker"}, "monopetreleobro",
                            {
                                expiresIn: 86400 // expires in 24 hours
                            }
                        );
                        res.status(200).header('XOBSERVATORY-AUTH',token).render('create_bill', {
                            table: path.basename(__filename, '.js'),
                            token: token, css: css, firstName: results[0].first_name, username: username
                        });
                    }
                }
            });
        }
        else{
            res.status(400);
        }
    }

    loginUserPage(req, res){
        res.sendFile(path.join(__dirname, '../../front-end/', 'userLogin.html'));
    }
}
const controller = new Login();
module.exports = controller;