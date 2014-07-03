var test = require('tape');
var contain = require('../');
var validate = require('./helpers/validate');

test('[0,0,200,200] within [100,100,100,100] => [100,100,100,100]', validate);
