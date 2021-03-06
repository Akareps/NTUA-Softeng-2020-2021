const axios = require('axios').default;
const path = require('path');
const fs = require("fs");

export async function login(args, httpsAgent){
    let username = args.username;
    let password = args.password;
    const file = path.join(require('os').homedir(), 'softeng20bAPI.token');
    const file1 = path.join(require('os').homedir(), 'admin');

    if(!(fs.existsSync(file)) && !(fs.existsSync(file1))){
        if (username && password) {
            let url = `https://localhost:8765/evcharge/api/loginCli/${username}/${password}`;
            const LocalStorage = require('node-localstorage').LocalStorage;
            const localStorage = new LocalStorage(require('os').homedir(),'softeng20bAPI.token');

            axios.get(url, {httpsAgent})
                .then((response) => {
                    let apikey = response.headers["id"].toString();
                    while(apikey.length !== 14){
                        if(apikey.length === 4 || apikey.length === 9)
                            apikey += '-'
                        apikey += '0';
                    }
                    if(apikey === args.apikey) {
                        if (response.headers['user_type'] !== 'user') {
                            console.log(response.data);
                            localStorage.setItem('softeng20bAPI.token', response.headers['xobservatory-auth'])
                            const localStorage2 = new LocalStorage(require('os').homedir(), 'apikey');
                            localStorage2.setItem('apikey', apikey);
                            if (response.headers['user_type'] === 'admin') {
                                const localStorage1 = new LocalStorage(require('os').homedir(), 'admin');
                                localStorage1.setItem('admin', response.headers['xobservatory-auth']);
                            }
                        } else {
                            console.log("You are not authorized user.")
                        }
                    }
                    else{
                        console.log('Wrong Api key');
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            console.log("Enter data");
        }
    }
    else{
        console.error("Our service is used. Please disconnect or contact system administrator.");
    }
}