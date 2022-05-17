function fillChargingPointProviders(db){
    let sql;
    sql = "INSERT INTO softeng2021.charging_point_energy_providers(point_id, providers_id) VALUES(1, 1)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_point_energy_providers(point_id, providers_id) VALUES(2, 2)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_point_energy_providers(point_id, providers_id) VALUES(3, 3)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_point_energy_providers(point_id, providers_id) VALUES(4, 2)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_point_energy_providers(point_id, providers_id) VALUES(5, 4)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
}
module.exports.fillChargingPointProviders = fillChargingPointProviders