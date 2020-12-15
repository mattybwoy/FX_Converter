var expect  = require('chai').expect;
var request = require('request');
var server = require('../app');
var chai = require ('chai'), chaiHttp = require('chai-http');
const nock = require('nock')
var mockResponse = require('./response');

var url = 'http://localhost:3000'

describe('Main and content', function() {

it('Main page content', function(done) {
    request(url , function(error, response, body) {
        expect(body).to.contain('Currency Converter');
        done();
    });
  });

it('Main page status', function(done) {
    request(url , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
  });
})

describe('Test API', () => {
  beforeEach(() => {
    nock('https://api.exchangeratesapi.io/latest')
    .replyContentLength(200, mockResponse)
  })
})