const database = require('../database/database');
const mysql = require('mysql');
const db = database.db;

const fs = require("fs");
const jwt = require('jsonwebtoken');
const css = {
    style: fs.readFileSync('./../front-end/style.css', 'utf8')
};


class LoginCli {
    loginCli(req, res) {

            let username = req.params.username;
            let password = req.params.password;

            if (username !== undefined && password !== undefined) {
                let sql;
                sql = `SELECT owner_id, first_name, user_type, last_name from softeng2021.owners where owners.user_name = '${username}' AND owners.password = '${password}'`
                db.query(sql, (err, results) => {
                    if (err) throw err;
                    if (results[0] === undefined) {
                        res.status(401).send("Wrong Username or Password");
                    } else {
                        let token;
                        token = jwt.sign({username: username}, "monopetreleobro",
                            {expiresIn: "1h" });// expires in 24 hours
                        console.log(token)
                        res.status(200).header('XOBSERVATORY-AUTH', token).header('user_type', results[0]["user_type"]).header('id', results[0]["owner_id"]).json({
                            token: token,
                        });

                    }
                });
            } else {
                res.status(400);
            }
        }


}

const controller = new LoginCli();
module.exports = controller;