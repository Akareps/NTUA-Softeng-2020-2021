const axios = require('axios').default;
const path = require('path');
const fs = require("fs");

export async function sessionsupd(args, httpsAgent) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    const localStorage = new LocalStorage(require('os').homedir(),'softeng20bAPI.token');
    let token = localStorage.getItem('softeng20bAPI.token')

    let file = args.file;
    let format = args.format;
    if(file && format){
        let url;
        if(format !== 'csv') {
            url = `https://localhost:8765/evcharge/api/admin/sessionsupd?file=${file}`;
        }
        else{
            url = `https://localhost:8765/evcharge/api/admin/sessionsupd?file=${file}&format='csv'`;
        }
        const options = {
            httpsAgent,
            method: 'POST',
            url: url,
            headers: {'XOBSERVATORY-AUTH': token}
        };
        axios(options)
            .then((response) => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    else{
        console.log("Enter Data.")
    }
}