const swaggerAutogen = require('swagger-autogen')();
const doc = require('./swagger.config');

const outputFile = './src/swagger-documentation.json';
const endPoints = [
  './src/routers/user-routes.ts',
  './src/routers/auth.ts',
  './src/routers/grades-routes.ts'
];

swaggerAutogen(outputFile, endPoints, doc);