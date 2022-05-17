const assert=require('chai').assert;
const reset=require("../mockup_functions/resetSessions-mock")
const cli=require("../mockup_functions/cli-mock")
const admin=require("../mockup_functions/cli-admin-mock")


describe('ResetSessions',  function (){
    it('it should reset Sessions',function (){
        const result=reset.Reset();
        assert.equal(result,1)
    });
});

describe('Cli',  function (){
    it('it should match cli to specific functions',function (){
        let flag=true
        let scope = ['SessionsPerPoint', 'login', 'logout', 'SessionsPerStation', 'SessionsPerEV', 'SessionsPerProvider',  'Admin', 'Other']
        let results = ['PerPoint', 'Login', 'Logout', 'PerStation', 'PerEV', 'PerProvider',  'Admin', 'Not Valid']
        let i
        for (i=0; i<8 ;i++) {
            const result=cli.Cli(scope[i]);
            if (result!==results[i])
                flag=false
        }
        assert.equal(flag,true)
    });
});

describe('Cli-admin',  function (){
    it('it should match cli-admin to specific functions',function (){
        let flag=true
        let scope = ['healthcheck', 'resetsessions', 'usermod', 'users', 'sessionsupd', 'other']
        let results = ['Healthcheck', 'ResetSessions', 'Usermod', 'Users', 'Sessionsupd', 'Not Valid']
        let i
        for (i=0; i<6 ;i++) {
            const result=admin.Admin(scope[i]);
            if (result!==results[i])
                flag=false
        }
        assert.equal(flag,true)
    });
});