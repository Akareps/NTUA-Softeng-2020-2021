#!/usr/bin/env node
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


//NODE_EXTRA_CA_CERTS = '../back-end/security/cert.pem';

require = require('esm')(module);
require('./cli').cli(process.argv);
// require('../cli-client/cli').cli(process.argv);