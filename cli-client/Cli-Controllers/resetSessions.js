const axios = require('axios').default;


export async function resetsessions(args, httpsAgent) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    const localStorage = new LocalStorage(require('os').homedir(),'softeng20bAPI.token');
    let token = localStorage.getItem('softeng20bAPI.token')

    let url = "https://localhost:8765/evcharge/api/admin/resetsessions";
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