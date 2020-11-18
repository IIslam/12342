const chai = require('chai')
const chaiHttp = require('chai-http')
const {serverUrL} = require('./config')
chai.use(chaiHttp)
const {expect} = chai

/**
 * Feel free to extend this test suite
 */
describe('API Endpoint Tests', function () {

  it('Non existing endpoint returning 404', async function () {
    const res = await chai.request(serverUrL).get('/v1/non-existing')
    expect(res.status).to.equal(404)
  })

  it('Dummy test', async function () {
    expect(true).to.equal(true)
  })

})
