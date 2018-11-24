import supertest from 'supertest';
import app from '../../configuration/app';

describe('ongs route', () => {

  let server;
  beforeAll(() => {
    server = (app as any).listen(8080);
  });

  it('should return 200 okay from a /ongs GET', (done) => {
    const ongs = [
      {
        description: 'Casa assistencialista para pessoas cegas',
        name: 'Lar das moças cegas',
      },
    ];
    supertest(server)
      .get('/ongs')
      .expect(200)
      .end((err, response) => {
        expect(response.body).toEqual(ongs);
        done();
      });
  });

  afterAll(() => {
    server.close();
  });
});
