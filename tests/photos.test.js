import 'dotenv/config';
import path from 'path';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server  from '../src/index';
import db from '../models';

const { Photos } = db;
const should = chai.should();
chai.use(chaiHttp);
const { expect } = chai;
let newphoto = {};
const photo = {
  title: 'Keza & Richard ',
  description:
    'Image was taken...',
    image: 'https://res.cloudinary.com/da5mganl4/image/upload/v1568976854/fwpm66mawy5enylfcfmg.jpg'
};

describe('Photo album .... ', () => {
  before(async () => {
    await Photos.destroy({ where: {}});
    // newphoto = (await Photos.create(photo)).get();
  });
  it('should get all uploaded images', (done) => {
    chai
    .request(server)
    .get('/api/photos')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    })
  })
  it('Should upload photo', (done) => {
    chai
    .request(server)
    .post('/api/photos')
    .field('title', 'title')
    .field('description', 'description')
    .attach('image', path.join(__dirname,'images/didy.jpg'))
    .end((err, res) => {
      res.should.have.status(201);
      expect(res.body.message).to.be.a('string');
      done();
    })
  })
});
