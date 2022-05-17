function createDatabase(db) {

    //initializes
    let sql = 'DROP DATABASE IF EXISTS softeng2021';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'CREATE DATABASE softeng2021';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql = "CREATE TABLE softeng2021.electric_cars (\n" +
        "    car_id int not null auto_increment,\n" +
        "    owner_id int not null,\n" +
        "    brand varchar(100),\n" +
        "    model varchar(100),\n" +
        "    type varchar(100),\n" +
        "    release_year numeric(4,0),\n" +
        "    usable_battery_size numeric(4,1),\n" +
        "    variant varchar(100),\n" +
        "    max_ac_power numeric(4,1),\n" +
        "    usable_phases numeric(1,0),\n" +
        "    max_dc_power numeric(4,1),\n" +
        "    primary key(car_id)\n" +
        ");";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql = "CREATE TABLE softeng2021.owners (\n" +
        "    owner_id int NOT NULL auto_increment,\n" +
        "    user_type varchar(10) default 'user',\n" +
        "    first_name varchar(64),\n" +
        "    last_name varchar(64),\n" +
        "    user_name varchar(25) NOT NULL,\n" +
        "    password varchar(100) NOT NULL,\n" +
        "    date_of_birth date,\n" +
        "    Bonus_points int,\n" +
        "    country varchar(100),\n" +
        "    city varchar(64),\n" +
        "    address varchar(64),\n" +
        "    postal_code int,\n" +
        "    primary key(owner_id)\n" +
        ");";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql = "CREATE TABLE softeng2021.owners_electric_cars (\n" +
        "    owner_id int not null,\n" +
        "    car_id int not null,\n" +
        "primary key(owner_id, car_id)\n" +
        ");";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql = "CREATE TABLE softeng2021.ports_ac (\n" +
        "    car_id int not null,\n" +
        "    port_ac_id int not null,\n" +
        "primary key(car_id, port_ac_id)\n" +
        ");";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql = "CREATE TABLE softeng2021.ports_dc (\n" +
        "    car_id int not null,\n" +
        "    port_dc_id int not null,\n" +
        "primary key(car_id, port_dc_id)\n" +
        ");";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = "CREATE TABLE softeng2021.charging_station(\n"+
        "  station_id int not null auto_increment,\n"+
        "  operator varchar(40),\n"+
        "  address varchar(200),\n" +
        "  primary key(station_id)\n" +
        ");";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql = "CREATE TABLE softeng2021.charging_history (\n" +
        "    history_id int not null auto_increment,\n" +
        "    car_id int not null,\n" +
        "    point_id int not null,\n" +
        "    owner_id int not null,\n" +
        "    station_id int not null,\n"+
        "    connection_time timestamp,\n" +
        "    disconnection_time timestamp,\n" +
        "    finished_charging_time timestamp,\n" +
        "    kWh numeric(5,2),\n" +
        "    modifiedAt date,\n" +
        "    paymentRequired int,\n" +
        "    total_cost numeric(8,2), \n"+
        "    primary key(history_id,car_id,point_id,owner_id, station_id)\n" +
        ");";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table Products_in_store
    sql = "CREATE TABLE softeng2021.charging_point (\n" +
        "    point_id int not null auto_increment,\n" +
        "    station_id int not null,\n"+
        "    address varchar(200),\n" +
        "    postal_code numeric(5,0),\n" +
        "    telephone numeric(10,0),\n" +
        "    country_code numeric(4,0),\n" +
        "    email varchar(100),\n" +
        "    primary key(point_id, station_id)\n" +
        ");";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql = "CREATE TABLE softeng2021.charging_point_energy_providers (\n" +
        "    point_id int not null,\n" +
        "    providers_id int not null,\n" +
        "primary key(point_id,providers_id)\n" +
        ");";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql = "CREATE TABLE softeng2021.energy_providers (\n" +
        "    provider_id int not null auto_increment,\n" +
        "    company varchar(100),\n" +
        "    website_URL varchar(500),\n" +
        "    comments varchar(500),\n" +
        "    telephone varchar(20),\n" +
        "    country_code numeric(4,0),\n" +
        "    address varchar(200),\n" +
        "    postal_code varchar(20),\n" +
        "    email varchar(100),\n" +
        "    primary key(provider_id)\n" +
        ");";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql = "CREATE TABLE softeng2021.charger_types_charging_stations (\n" +
        "    type_id int not null,\n" +
        "    point_id int not null,\n" +
        "    primary key(type_id,point_id)\n" +
        ");";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql = "CREATE TABLE softeng2021.charger_types (\n" +
        "    type_id int not null auto_increment,\n" +
        "    type varchar(30),\n" +
        "    primary key(type_id)\n" +
        ");";
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    sql = "INSERT INTO softeng2021.owners (first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES ('Andreas', 'Akarepis', 'abc', 123, '1999-03-30', 0, 'Greece', 'Athens','63',19013 )"
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    console.log("database created")
}

module.exports.createDatabase = createDatabase;