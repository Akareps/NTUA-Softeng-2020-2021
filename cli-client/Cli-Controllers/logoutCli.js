const path = require('path');
const fs = require('fs');
const file = path.join( require('os').homedir(),'softeng20bAPI.token')
const file1 = path.join( require('os').homedir(),'admin')
const file2 = path.join( require('os').homedir(),'apikey')

export async function logout(args) {

    if (!(fs.existsSync(file))) {
        if(!(fs.existsSync(file1))) {
            console.error("You have not Login. In order to Logout you have to Login First")
        }
        else{
            fs.unlink(file1, (err) => {
                if (err) throw err;
                console.log("Log Out Successful");
            });
        }
    }
    else {
        fs.unlink(file, (err) => {
            if (err) throw err;
            console.log("Log Out Successful");
        });
        fs.unlink(file2, (err) => {
            if (err) throw err;
        });
        if((fs.existsSync(file1))){
            fs.unlink(file1, (err) => {
                if (err) throw err;
            });
        }
    }
    return 0
}