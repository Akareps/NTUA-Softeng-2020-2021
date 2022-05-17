function fillHistory(db){
    let sql;
    sql = "INSERT INTO softeng2021.charging_history( car_id, point_id, owner_id, station_id, connection_time, disconnection_time, kWh, modifiedAt,paymentRequired, total_cost) VALUES( 1, 1, 1, 1, '2020-12-20 13:25:57', '2020-12-20 13:27:57', 23.4, '2020-12-20',1,53)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_history( car_id, point_id, owner_id, station_id, connection_time, disconnection_time, kWh, modifiedAt,paymentRequired, total_cost) VALUES( 5, 1, 4, 1, '2020-12-22 14:27:52', '2020-12-22 16:12:03', 22, '2020-12-22',1, 80)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_history( car_id, point_id, owner_id, station_id, connection_time, disconnection_time, kWh, modifiedAt,paymentRequired, total_cost) VALUES( 18, 2, 20, 3, '2020-09-22 18:55:51', '2020-09-22 19:27:33', 80, '2020-09-22',0, 100)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_history( car_id, point_id, owner_id, station_id, connection_time, disconnection_time, kWh, modifiedAt,paymentRequired, total_cost) VALUES( 13, 4, 15, 2, '2021-01-10 19:11:33', '2021-01-10 20:33:22', 10, '2021-01-10',0, 222)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_history( car_id, point_id, owner_id, station_id, connection_time, disconnection_time, kWh, modifiedAt,paymentRequired, total_cost) VALUES( 30, 3, 39, 3, '2020-10-20 09:25:21', '2020-10-20 10:27:51', 48, '2020-10-20',1, 59)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    console.log('Charginghistory inserted in db')
}
module.exports.fillHistory = fillHistory