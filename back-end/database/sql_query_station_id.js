function fillStations(db){
    let sql;
    sql = "INSERT INTO softeng2021.charging_station(operator, address) VALUES('Shell','Athens')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_station(operator, address) VALUES('MOTOROIL','Berlin')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_station(operator, address) VALUES('nPower','Milan')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_station(operator, address) VALUES('Scottish Power','Liverpool')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_station(operator, address) VALUES('British Gas','London')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
}
module.exports.fillStations = fillStations