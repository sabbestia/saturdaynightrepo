/**
 * Created by sebas on 25/03/2017.
 */
var should = require('chai').should(),
    saturdaynightrepo = require('../index'),
    log = saturdaynightrepo.log,
    warn = saturdaynightrepo.warn,
    error = saturdaynightrepo.error;

describe('#log', function () {
    it('log message', function () {
        log('message').should.equal(true);
    })
});

describe('#warn', function () {
    it('log message', function () {
        warn('message').should.equal(true);
    })
});

describe('#error', function () {
    it('error message', function () {
        error('message').should.equal(true);
    })
});