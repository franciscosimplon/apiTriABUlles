const triController = require('../controllers/triController')
const arrayNumbers = triController.arrayNumbers;
const triArray = triController.triArray;

let chai = require('chai');
let chaiHttp = require('chai-http');
const server = require('../index')


// const object = {test: 'n'}


chai.use(chaiHttp);
const should = chai.should();
// const url= 'http://localhost:3001';



describe('Insert an array: ',()=>{
  it('should insert an array', (done) => {
  let body = {test: [1,6,5,4,3,2]};
  chai.request(server)
  .post('/tri')
  .send(body)
  .end( function(err,res){
  console.log(res.body)
  res.should.have.status(200);
  res.body.should.be.a('object');
  // res.body.should.have.property('errors');
  // res.body.errors.should.have.property('pages');
  // res.body.errors.pages.should.have.property('kind').eql('required');
  done();
  });
  });
 });

 
 


// describe("is array",function(){
//   it('ok if array = Array',function(){
//     // assert.fail('error')
//     assert.ok(Array.isArray(arrayNumbers));
//   })
// });



// let chai = require('chai');
// let chaiHttp = require('chai-http');
// const expect = require('chai').expect;

// chai.use(chaiHttp);
// const url= 'http://localhost:3001';

// let body = {test: [1,6,5,4,3,2]};

// describe('Insert an array: ',()=>{
//   it('should insert an array', (done) => {
//   chai.request(url)
//   .post('/tri')
//   .send(body)
//   .end( function(err,res){
//   console.log(res.body)
//   expect(res).to.have.status(200);
//   done();
//   });
//   });
//  });
 