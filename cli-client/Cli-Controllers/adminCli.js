import {healthcheck} from "./healthcheckCli";
import {resetsessions} from "./resetSessions";
import {users} from './usersCli'
import {usermode} from './usermodeCli'
import {sessionsupd} from "./sessionsupd";
import * as https from "https";

const axios = require('axios').default;
const path = require('path');
const fs = require("fs");

export async function admin(args, httpsAgent){
    const file = path.join(require('os').homedir(), 'admin')
    fs.readFile(file, 'utf8', (err)=> {
        if(err){
            console.error("You are not admin")
            process.exit(1)
        }
        else{
            if(args.healthcheck){
                healthcheck(args, httpsAgent);
            }
            else if(args.resetsessions){
                resetsessions(args, httpsAgent);
            }
            else if(args.usermod){
                usermode(args, httpsAgent);
            }
            else if(args.users){
                users(args, httpsAgent);
            }
            else if(args.sessionsupd){
                sessionsupd(args, httpsAgent);
            }
            else{
                console.log("Such a command is not supported by the system")
            }
        }
    });

}