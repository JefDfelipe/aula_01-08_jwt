const { User } = require('./documentation/User-doc');
const { Grade } = require('./documentation/Grade-doc');

module.exports = {
  info: {
    version: '1.0.1',
    title: 'API Exemplo JWT + Swagger',
    description: 'Descrição da API...'
  },
  host: 'localhost:8080',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  secutiryDefinitions: {
    JWT: {
      description: 'JWT Token',
      type: 'apiKey',
      in: 'header',
      name: 'Authorization'
    }
  },
  definitions: {
    User,
    Grade,
    UserList: [
      { $ref: '#/definitions/User' }
    ],
    GradeList: [
      { $ref: '#/definitions/Grade' }
    ]
  }
};