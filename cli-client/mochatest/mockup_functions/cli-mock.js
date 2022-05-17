
var cli=function (scope){

    switch(scope){
        case 'SessionsPerPoint':
            return 'PerPoint'
            break;
        case 'login':
            return 'Login'
            break;
        case 'logout':
            return 'Logout'
            break;
        case 'SessionsPerStation':
            return 'PerStation'
            break;
        case 'SessionsPerEV':
            return 'PerEV'
            break;
        case 'SessionsPerProvider':
            return 'PerProvider'
            break;
        case 'Admin':
            return 'Admin'
            break;
        default:
            return 'Not Valid'
            break;
    }
}

module.exports= {
    Cli: cli
}