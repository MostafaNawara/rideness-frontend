export default {
  "development": {
    "username": process.env.USER,
    "password": null,
    "database": "rideness_develop",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "rideness_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "rideness_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}[process.env.NODE_ENV];
