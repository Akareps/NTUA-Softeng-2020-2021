const minimist = require('minimist');
const moment = require('moment');
import {perPoint} from './Cli-Controllers/perPointCli';
import {healthcheck} from "./Cli-Controllers/healthcheckCli";
import {perStation} from './Cli-Controllers/perStationCli';
import {perEV} from './Cli-Controllers/perEVCli';
import {perProvider} from './Cli-Controllers/perProviderCli';
import {login} from './Cli-Controllers/loginCli'
import {logout} from './Cli-Controllers/logoutCli'
import {resetsessions} from './Cli-Controllers/resetSessions'
import {admin} from './Cli-Controllers/adminCli'
const https = require('https')
const fs = require("fs");

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    cert : fs.readFileSync('../back-end/security/cert.pem'),
    key: fs.readFileSync('../back-end/security/cert.key')
})


function Parse(args){
    if (args["_"]) { delete args["_"]; }
    if(args.datefrom){
        let date = args.datefrom.toString();
        args.datefrom = date[0]+date[1]+date[2]+date[3]+'-'+date[4]+date[5]+'-'+date[6]+date[7];
    }
    if(args.dateto){
        let date = args.dateto.toString();
        args.dateto = date[0]+date[1]+date[2]+date[3]+'-'+date[4]+date[5]+'-'+date[6]+date[7];
    }
    return args;
}

export async function cli(argsArray){
    const argument = minimist(argsArray.slice(2));
    const args =  Parse(argument);

    let scope = argsArray[2] || 'help';
    args._ = "[]";
    if(args.apikey === undefined  && scope !== 'logout' && scope !== 'login'){
        console.log('status code: 400(Bad request)')
        return;
    }
    else if((scope === 'login' || scope === 'logout') && args.apikey === undefined){
        console.log('status code: 400(Bad request)')
        return;
    }
    const LocalStorage = require('node-localstorage').LocalStorage;
    const localStorage = new LocalStorage(require('os').homedir(),'apikey');

    let apikey = localStorage.getItem('apikey')
    if(scope !== 'login' && args.apikey !== apikey){
        console.log('Wrong Apikey')
        return;
    }

    switch(scope){
        case 'SessionsPerPoint':
            perPoint(args, httpsAgent)
            break;
        case 'login':
            login(args, httpsAgent)
            break;
        case 'logout':
            logout(args)
            break;
        case 'SessionsPerStation':
            perStation(args, httpsAgent)
            break;
        case 'SessionsPerEV':
            perEV(args, httpsAgent)
            break;
        case 'SessionsPerProvider':
            perProvider(args, httpsAgent)
            break;
        case 'Admin':
            admin(args, httpsAgent)
            break;
        default:
            console.error(`"${scope}" is not a valid command!`);
            break;
    }
}