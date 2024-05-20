const express = require('express')
const db = require('./config/dbconfig')
const userRoute  = require('./routes/userRoutes')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();
db();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', userRoute);


const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`app is listening at port : ${PORT}`);
})