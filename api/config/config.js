export default {
  development: {
    username: process.env.USER,
    password: null,
    database: 'rideness_develop',
    host: '127.0.0.1',
    dialect: 'postgres',
    secret: '14f4d34cdb87d2b36ffb9351b3889dca1db390f145b609852b11262a3ee8871c892660b58afe93e14d74c5dd74fe8d9a',
    authyKey: '5OpNfOglkQIRLo9BeWuHD4CTWtLxgA2g'
  },
  test: {
    username: 'root',
    password: null,
    database: 'rideness_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'docker',
    password: 'docker',
    database: 'rideness_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    secret: '14f4d34cdb87d2b36ffb9351b3889dca1db390f145b609852b11262a3ee8871c892660b58afe93e14d74c5dd74fe8d9a'
  }
}[process.env.NODE_ENV];
