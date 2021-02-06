const request = require('supertest');
const app = require('../../app');
const connection = require('../../database/connection');

describe('Test RESTAURANTS', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
    await connection.migrate.forceFreeMigrationsLock();
  });

  it('Should be able to create a new RESTAURANT', async () => {
    const response = await request(app)
      .post('/api/restaurants')
      .send({
        name: 'ABE',
        email: 'contato@gmail.com',
        whatsapp: '+5551981454597',
        city: 'Porto Alegre',
        uf: 'RS',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(20);
  });

  it('Should be able to create a new RESTAURANT', async () => {
    expect(4 + 2).toBe(6);
  });

  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
});
