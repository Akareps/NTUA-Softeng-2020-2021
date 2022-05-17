const login = require('../Controllers/login.js');
const newUser = require('../Controllers/postNewUser')
const getUserInfo = require('../Controllers/getUserInformation')
const healthcheck = require('../Controllers/healthcheck')
const resetSession = require('../Controllers/resetSessions')
const perEV = require('../Controllers/perEV')
const perPoint = require('../Controllers/perPoint')
const perProvider = require('../Controllers/perProvider')
const perStation = require('../Controllers/perStation')
const logout = require('../Controllers/logout')
const charge = require('../Controllers/charge')
const bill = require('../Controllers/bill')
const checkAdmin = require('../middleware/checkAdmin')
const checkAuthentication = require('../middleware/checkAuthentication')
const loginCli = require('../Controllers/loginCli')
const uploadCsvCtr = require('../Controllers/upload_csv')



const express = require('express');
const router = express.Router();

//Login-Logout
//Login
router.post('/evcharge/api/login',login.loginUser);
router.get('/evcharge/api/login',login.loginUserPage);
router.get('/evcharge/api/loginCli/:username/:password',loginCli.loginCli);
//Logout
router.post('/evcharge/api/logout',checkAuthentication,logout.logoutUser);
//charge
router.post('/evcharge/api/charge',checkAuthentication,charge.charge);
//bill
router.post('/evcharge/api/bill',checkAuthentication,bill.bill);
//Διαχειριστικά Endpoints
router.post('/evcharge/api/admin/usermode/:username/:password',checkAdmin,newUser.postNewUser);
router.get('/evcharge/api/admin/users/:username',checkAdmin,getUserInfo.getUserInformation);
router.post('/evcharge/api/admin/sessionsupd', checkAdmin,uploadCsvCtr.UploadCsv);

//Πρόσθετα
router.get('/evcharge/api/admin/healthcheck',checkAdmin,healthcheck.healthcheck);
router.post('/evcharge/api/admin/resetsessions', checkAdmin,resetSession.ResetSessions);
//Λειτουργικά
//2α
router.get('/evcharge/api/SessionPerPoint/:pointID/:yyyymmdd_from/:yyyymmdd_to', checkAdmin,perPoint.PerPoint);
//2b
router.get('/evcharge/api/SessionPerStation/:stationID/:yyyymmdd_from/:yyyymmdd_to', checkAdmin,perStation.PerStation);
//2c
router.get('/evcharge/api/SessionPerEV/:car_id/:yyyymmdd_from/:yyyymmdd_to', checkAdmin,perEV.PerEV);
//2d
router.get('/evcharge/api/SessionPerProvider/:provider_id/:yyyymmdd_from/:yyyymmdd_to', checkAdmin,perProvider.PerProvider);

module.exports = router;