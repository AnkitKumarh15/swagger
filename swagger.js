const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:5000/api'
};

const outputFile = './swagger-output.json';
// const routes = ['./path/userRoutes.js', './path/bookRoutes.js'];
const routes = ['./routes/userRoutes.js']

swaggerAutogen(outputFile, routes, doc);



// npm run generateDoc, for generating docs