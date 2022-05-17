function fillEnergyProviders(db){
    let sql;
    sql = "INSERT INTO softeng2021.energy_providers(company) VALUES('SHELL')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});

    sql = "INSERT INTO softeng2021.energy_providers(company) VALUES('MOTOROIL')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});

    sql = "INSERT INTO softeng2021.energy_providers(company) VALUES('nPower')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});

    sql = "INSERT INTO softeng2021.energy_providers(company) VALUES('Scottish Power')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});

    sql = "INSERT INTO softeng2021.energy_providers(company) VALUES('British Gas')";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
}
module.exports.fillEnergyProviders = fillEnergyProviders