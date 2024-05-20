const express = require('express')
const db = require('./config/dbconfig')
const userRoute  = require('./routes/userRoutes')

const app = express();
db();
app.use(express.json());

app.use('/api', userRoute);

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`app is listening at port : ${PORT}`);
})