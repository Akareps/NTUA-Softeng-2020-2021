const axios = require('axios').default;
const path = require('path');
const fs = require("fs");

export async function users(args, httpsAgent) {
    let username = args.username;
    let format = args.format;
    const LocalStorage = require('node-localstorage').LocalStorage;
    const localStorage = new LocalStorage(require('os').homedir(),'softeng20bAPI.token');
    let token = localStorage.getItem('softeng20bAPI.token')

    if(username && format){
        let url;
        if(format !== "csv") {
            url = `https://localhost:8765/evcharge/api/admin/users/${username}`;
        }
        else{
            url = `https://localhost:8765/evcharge/api/admin/users/${username}?format={'csv'}`;
        }
        const options = {
            httpsAgent,
            method: 'GET',
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