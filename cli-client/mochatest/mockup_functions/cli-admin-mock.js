
  var admin=function (scope){
      switch(scope){
          case 'healthcheck':
              return 'Healthcheck'
              break;
          case 'resetsessions':
              return 'ResetSessions'
              break;
          case 'usermod':
              return 'Usermod'
              break;
          case 'users':
              return 'Users'
              break;
          case 'sessionsupd':
              return 'Sessionsupd'
              break;
          default:
              return 'Not Valid'
              break;
        }
}

  module.exports= {
      Admin: admin
  }