function createforeignKeys (db) {
    // put Foreign Keys in tables
    let sql = 'use softeng2021;'
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE owners_electric_cars ADD FOREIGN KEY(owner_id) REFERENCES owners(owner_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE owners_electric_cars ADD FOREIGN KEY(car_id) REFERENCES electric_cars(car_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE ports_ac ADD FOREIGN KEY(car_id) REFERENCES electric_cars(car_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE ports_dc ADD FOREIGN KEY(car_id) REFERENCES electric_cars(car_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE charging_point ADD FOREIGN KEY(station_id) REFERENCES charging_station(station_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE charging_history ADD FOREIGN KEY(car_id) REFERENCES electric_cars(car_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE charging_history ADD FOREIGN KEY(station_id) REFERENCES charging_station(station_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE charging_history ADD FOREIGN KEY(point_id) REFERENCES charging_point(point_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE charging_history ADD FOREIGN KEY(owner_id) REFERENCES owners(owner_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE charging_point_energy_providers ADD FOREIGN KEY(point_id) REFERENCES charging_point(point_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE charging_point_energy_providers ADD FOREIGN KEY(providers_id) REFERENCES energy_providers(provider_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE charger_types_charging_stations ADD FOREIGN KEY(point_id) REFERENCES charging_point(point_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql ="ALTER TABLE charger_types_charging_stations ADD FOREIGN KEY(type_id) REFERENCES charger_types(type_id) ON DELETE CASCADE ON UPDATE CASCADE;";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    console.log("Foreign keys created")
}

module.exports.createforeignKeys = createforeignKeys;