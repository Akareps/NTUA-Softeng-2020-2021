const createDatabase = require('./createDatabase');
const mysql = require('mysql');
const pass = require('./password');
const fk = require("./createForeignKeys");
const elcars = require('./sql_queries_electric_cars')
const owners = require('./sql_queries_owners')
const history = require('./sql_queries_charging_history')
const points = require('./sql_queries_charging_point')
const points_providers = require('./sql_queries_charging_point_providers')
const providers = require('./sql_query_energy_providers')
const stations = require('./sql_query_station_id')

//CREDENTIALS
const db = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : pass.password() //untracked file containing my sql password
    });
db.connect((err)=>{
    if (err) { 
        throw err;
    }
    console.log('MySQL Connected');
});

//FUNCTIONS    
function CreateDatabase() {
    createDatabase.createDatabase(db);
    fk.createforeignKeys(db);
    elcars.fillElectricCars(db);
    owners.fillOwners(db);
    providers.fillEnergyProviders(db);
    stations.fillStations(db);
    points.fillPoints(db);
    points_providers.fillChargingPointProviders(db);
    history.fillHistory(db);
}

//EXPORTS
module.exports.db = db;
module.exports.CreateDatabase = CreateDatabase();

