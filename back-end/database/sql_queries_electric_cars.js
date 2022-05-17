function fillElectricCars(db) {
let sql
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(0,'Audi','e-tron 55','bev',2019,86.5,'',11.0,3,155)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(1,'Audi','e-tron 55','bev',2019,86.5,'22kW-AC',22.0,3,155)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(2,'Audi','e-tron 50','bev',2019,65.0,'',11.0,3,125.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(3,'Audi','e-tron 50','bev',2019,65.0,'22kW-AC',22.0,3,125.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(4,'Audi','A3 Sportback 40 e-tron','phev',2020,8.8,'',3.7,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(5,'BMW','i3','bev',1999,18.8,'60 Ah',7.4,1,47)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(6,'BMW','i3','bev',1999,27.2,'94 Ah',11.0,3,50)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(7,'BMW','i3','bev',1999,37.9,'120 Ah',11.0,3,50)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(8,'BMW','X5','phev',2020,21.0,'PHEV',3.7,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(9,'Citroen','C-Zero','bev',1999,14.5,'',3.6,1,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(10,'Fiat','500e','bev',2014,19.2,'',6.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(11,'Fiat','500e','bev',2020,42.0,'',11.0,3,85.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(12,'Ford','Focus electric','bev',2017,33.5,'',6.6,1,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(13,'Ford','Focus electric','bev',2013,23.0,'',6.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(14,'Hyundai','Kona','bev',2018,39.2,'39 kWh',7.2,1,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(15,'Hyundai','Kona','bev',2020,39.2,'39 kWh 11 kW-AC',11.0,3,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(16,'Hyundai','Ioniq','bev',2016,28.0,'',6.6,1,69)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(17,'Hyundai','Ioniq','bev',2019,38.3,'',7.2,1,47.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(18,'Hyundai','Ioniq','phev',2016,8.9,'PHEV',3.7,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(19,'Hyundai','Kona','bev',2018,64.0,'64 kWh',7.2,1,77)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(20,'Hyundai','Kona','bev',2020,64.0,'64 kWh',11.0,3,77)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(21,'Jaguar','i-Pace','bev',1999,84.0,'',7.4,1,105)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(22,'Kia','e-Niro','bev',2018,39.0,'39 kWh',7.2,1,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(23,'Kia','Soul','bev',1999,27.0,'27 kWh',6.6,1,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(24,'Kia','Soul','bev',1999,30.0,'30 kWh',6.6,1,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(25,'Kia','e-Soul','bev',2019,39.0,'39 kWh',7.2,1,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(26,'Kia','e-Niro','bev',2018,64.0,'64 kWh',7.2,1,77)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(27,'Kia','e-Niro','bev',2020,64.0,'64 kWh',11.0,3,77)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(28,'Kia','e-Soul','bev',2019,64.0,'64 kWh',7.2,1,77)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(29,'Kia','e-Soul','bev',2020,64.0,'64 kWh 11 kW-AC',11.0,3,77.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(30,'Mercedes Benz','EQC','bev',2019,80.0,'',7.4,2,125)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(31,'Mercedes Benz','B-Klasse','bev',1999,28.0,'',11.0,3,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(32,'Mitsubishi','i-Miev','bev',1999,14.5,'',3.6,1,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(33,'Mitsubishi','Outlander PHEV','phev',2018,11.0,'',3.7,1,22.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(34,'Nissan','e-NV 200','bev',1999,24.0,'24 kWh',3.6,1,46.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(35,'Nissan','e-NV 200','bev',1999,24.0,'24 kWh 6,6 kW-AC',6.6,1,46.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(36,'Nissan','e-NV 200','bev',1999,38.0,'40 kWh',6.6,1,46.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(37,'Nissan','Leaf','bev',2011,24.0,'24 kWh',3.6,1,46)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(38,'Nissan','Leaf','bev',2011,24.0,'24 kWh 6,6 kW-AC',6.6,1,46)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(39,'Nissan','Leaf','bev',2015,30.0,'30 kWh',3.6,1,47)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(40,'Nissan','Leaf','bev',2015,30.0,'30 kWh 6,6 kW-AC',6.6,1,47)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(41,'Nissan','Leaf','bev',2017,38.0,'40 kWh',6.6,1,45)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(42,'Nissan','Leaf','bev',2019,62.0,'e+ 62 kWh',6.6,1,100.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(43,'Opel','Ampera e','bev',2017,60.0,'CCS',7.2,1,45)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(44,'Opel','Ampera e-Pionier','bev',2012,10.6,'',2.2,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(45,'Peugeot','I-on','bev',1999,14.5,'',3.6,1,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(46,'Renault','Zoe','bev',2013,22.0,'Q 210',43.0,3,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(47,'Renault','Zoe','bev',2015,22.0,'R 240',22.0,3,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(48,'Renault','Zoe','bev',2017,41.0,'R 90',22.0,3,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(49,'Renault','Zoe','bev',2017,41.0,'Q 90',30.0,3,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(50,'Renault','Zoe','bev',2019,41.0,'R110 ZE 40',22.0,3,45.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(51,'Renault','Zoe','bev',2019,52.0,'ZE50',22.0,3,46)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(52,'Renault','Kangoo ZE','bev',1999,33.0,'',7.2,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(53,'Renault','Twizy','bev',1999,6.1,'',3.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(54,'smart','fortwo ED','bev',1999,17.6,'',3.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(55,'smart','fortwo ED','bev',1999,17.6,'22 kW-AC',22.0,3,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(56,'smart','fortwo EQ','bev',1999,17.6,'',3.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(57,'smart','fortwo EQ','bev',1999,17.6,'22 kW-AC',22.0,3,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(58,'smart','forfour EQ','bev',1999,17.6,'',3.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(59,'smart','forfour EQ','bev',1999,17.6,'22 kW-AC',22.0,3,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(60,'Tesla','Model 3','bev',1999,50.0,'SR+',11.0,3,149)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(61,'Tesla','Model 3','bev',1999,74.0,'LR',11.0,3,195)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(62,'Tesla','Model 3','bev',1999,72.5,'Performance',11.0,3,195)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(63,'Tesla','Model S','bev',1999,67.0,'70',11.0,3,100.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(64,'Tesla','Model S','bev',1999,67.0,'70, 22 kW-AC',22.0,3,100.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(65,'Tesla','Model S','bev',1999,72.5,'75',16.5,3,120.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(66,'Tesla','Model S','bev',1999,76.0,'85',11.0,3,140)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(67,'Tesla','Model S','bev',1999,81.0,'90',16.5,3,140)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(68,'Tesla','Model S','bev',1999,95.0,'100',16.5,3,140)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(69,'Tesla','Model X','bev',2016,90.0,'90D',11.0,3,140)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(70,'Tesla','Model X','bev',2017,100.0,'P100D',16.5,3,140)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(71,'Tesla','Model X','bev',2016,90.0,'P90D',11.0,3,140)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(72,'Tesla','Model X','bev',2019,100.0,'Performance',16.5,3,140)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(73,'Tesla','Model X','bev',2017,100.0,'100D',16.5,3,140)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(74,'Tesla','Model X','bev',2019,100.0,'Maximum Range',16.5,3,140)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(75,'Tesla','Model X','bev',2019,75.0,'Standard Range',16.5,3,140)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(76,'Tesla','Model X','bev',2019,75.0,'75D',16.5,3,140)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(77,'Tesla','Model X','bev',2016,60.0,'60D',11.0,3,140)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(78,'Volkswagen','e-Golf','bev',2014,21.2,'CCS',3.6,1,44)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(79,'Volkswagen','e-Golf','bev',2017,31.5,'CCS',7.2,2,40)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(80,'Volkswagen','e-up','bev',2013,16.5,'CCS',3.6,1,44)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(81,'Volkswagen','e-Golf','bev',2014,21.2,'',3.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(82,'Volkswagen','e-Golf','bev',2017,31.5,'',7.2,2,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(83,'Volkswagen','e-up','bev',2013,16.5,'',3.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(84,'Volkswagen','e-up','bev',2020,32.3,'',7.2,2,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(85,'Volkswagen','e-up','bev',2020,32.3,'CCS',7.2,2,34)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(86,'Volkswagen','ID.3','bev',2020,45.0,'Standard Range',7.2,2,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(87,'Volkswagen','ID.3','bev',2020,58.0,'Mid Range',11.0,3,100.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(88,'Volkswagen','ID.3','bev',2020,77.0,'Long Range',11.0,3,125.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(89,'Volkswagen','Golf GTE','phev',2017,8.7,'',3.7,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(90,'Volkswagen','Passat GTE','phev',2019,13.1,'',3.7,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(91,'Peugeot','e-208','bev',2020,47.5,'7,2 kW-AC',7.4,1,97)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(92,'Peugeot','e-208','bev',2020,47.5,'11 kW-AC',11.0,3,97)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(93,'Peugeot','e-2008','bev',2020,47.5,'7,2 kW-AC',7.4,1,97)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(94,'Peugeot','e-2008','bev',2020,47.5,'11 kW-AC',11.0,3,100.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(95,'Peugeot','Partner','bev',1999,22.5,'',3.2,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(96,'Opel','Corsa-e','bev',2020,47.5,'7,2 kW-AC',7.4,1,97)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(97,'Opel','Corsa-e','bev',2020,47.5,'11 kW-AC',11.0,3,97)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(98,'Citroen','Berlingo Electric','bev',1999,22.5,'',3.2,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(99,'Mini','Countryman ALL4','phev',2019,7.6,'',3.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(100,'Mini','Cooper SE','bev',2020,28.9,'',11.0,3,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(101,'Honda','e','bev',2020,32.0,'',6.6,1,60.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(102,'Porsche','Taycan','bev',2020,83.7,'Turbo S',11.0,3,270.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(103,'Porsche','Taycan','bev',2020,71.0,'4S',11.0,3,225.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(104,'Porsche','Taycan','bev',2020,83.7,'4S Plus',11.0,3,270.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(105,'Porsche','Taycan','bev',2020,83.7,'Turbo ',11.0,3,270.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(106,'MG','ZS EV','bev',2020,44.5,'',6.6,1,55.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(107,'Maxus','EV80','bev',2018,56.0,'',6.6,2,28.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(108,'Polestar','2','bev',2020,72.5,'',11.0,3,150.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(109,'Seat','Mii Electric','bev',2020,32.3,'CCS',7.2,2,34)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(110,'Skoda','CITIGOe iV','bev',2020,32.3,'CCS',7.2,2,34)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(111,'DS','3 Crossback E-Tense','bev',2020,46.0,'7,2 kW-AC',7.4,1,100.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(112,'DS','3 Crossback E-Tense','bev',2020,46.0,'11 kW-AC',11.0,3,100.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(113,'Aiways','U5','bev',2020,63.0,'',6.6,1,100.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(114,'Artega','Karo','bev',2020,8.0,'Range',4.0,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(115,'Artega','Karo','bev',2020,14.4,'Range Plus',4.0,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(116,'e.GO Mobile','Life 60','bev',2019,21.0,'',3.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(117,'e.GO Mobile','Life 40','bev',2019,17.5,'',3.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(118,'e.GO Mobile','Life 20','bev',2019,14.5,'',3.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(119,'Volvo','XC 60 T8','phev',2018,10.4,'',3.7,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(120,'Ford','Kuga','phev',2020,14.4,'PHEV',3.7,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(121,'Mazda','MX-30','bev',2020,32.0,'',6.6,1,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(122,'Chevrolet','Bolt','bev',2017,58.0,'60 kWh',7.2,2,55)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(123,'Chevrolet','Spark EV','bev',2013,21.3,'21 kWh',3.3,1,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(124,'Chevrolet','Spark EV','bev',2015,19.0,'19 kWh',3.3,1,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(125,'Peugeot','3008','phev',2020,11.2,'HYbrid4 3,7 kW-AC',3.7,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(126,'Peugeot','3008','phev',2020,11.2,'HYbrid4 7,4 kW-AC',7.4,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(127,'Mercedes Benz','A 250 e','phev',2020,10.7,'3,7 kW-AC',3.7,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(128,'Mercedes Benz','A 250 e','phev',2020,10.7,'7,4 kW-AC',7.4,2,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(129,'Mercedes Benz','A 250 e','phev',2020,10.7,'7,4 kW-AC + DC',7.4,2,24.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(130,'DS','7 Crossback','phev',2020,13.2,'E-Tense 4X4 PHEV',7.4,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(131,'Kia','Ceed SW','phev',2020,8.9,'PHEV',3.3,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(132,'Kia','XCeed','phev',2020,8.9,'PHEV',3.3,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(133,'Kia','Niro','phev',2020,8.9,'PHEV',3.3,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(134,'Renault','Captur E-Tech','phev',2020,9.8,'PHEV',3.0,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(135,'Mercedes Benz','GLC 300 de 4MATIC','phev',2020,13.5,'PHEV',7.4,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(136,'Skoda','Superb iV','phev',2020,13.0,'PHEV',3.6,1,null)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(137,'Skoda','Enyaq iV','bev',2020,52.0,'55 kWh',7.2,2,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(138,'Skoda','Enyaq iV','bev',2020,58.0,'62 kWh 50 kW-DC',11.0,3,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(139,'Skoda','Enyaq iV','bev',2020,58.0,'62 kWh 100 kW-DC',11.0,3,100.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(140,'Skoda','Enyaq iV','bev',2020,77.0,'82 kWh 50 kW-DC',11.0,3,50.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(141,'Skoda','Enyaq iV','bev',2020,77.0,'82 kWh 125 kW-DC',11.0,3,125.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
sql = "INSERT INTO Softeng2021.electric_cars(owner_id, brand, model, type, release_year, usable_battery_size, variant, max_ac_power, usable_phases, max_dc_power) VALUES(142,'Mercedes Benz','GLE','phev',2020,31.2,'350 de/e',7.4,1,60.0)";
db.query(sql,(err,results)=>{
if (err) throw err;});
console.log('Electric cars inserted in db')
}

module.exports.fillElectricCars = fillElectricCars
