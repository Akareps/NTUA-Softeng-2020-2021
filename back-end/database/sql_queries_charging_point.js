function fillPoints(db){
    let sql;
    sql = "INSERT INTO softeng2021.charging_point(station_id, address, postal_code, telephone, country_code, email) VALUES(1, 'Athens', 15771, 2102102109, 1234, 'athens@gmail.com')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_point(station_id, address, postal_code, telephone, country_code, email) VALUES(2, 'Berlin', 93821, 9302830283, 5678, 'hdjsk@yahoo.com')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_point(station_id, address, postal_code, telephone, country_code, email) VALUES(2, 'Berlin', 93821, 8402048204, 5678, 'hdjsnkj@gmail.com')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_point(station_id, address, postal_code, telephone, country_code, email) VALUES(3, 'Milan', 74822, 8392039201, 3421, 'djdjdjkd@uao.it')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_point(station_id, address, postal_code, telephone, country_code, email) VALUES(4, 'Liverpool', 84921, 3920392014, 9032, 'jsjdkdk@jejej.en')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO softeng2021.charging_point(station_id, address, postal_code, telephone, country_code, email) VALUES(5, 'London', 93021, 5940293028, 3920, 'good@djjdjd.en')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
}
module.exports.fillPoints = fillPoints