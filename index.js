const express = require('express');
const dotenv = require('dotenv').config();
require('./db/db_connection');
const hataMiddleware = require('./middleware/hata_middleware');



//ROUTES
const sehirRouter = require('./routers/sehir_router');
 


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/sehirler', sehirRouter);
 


app.get('/', (req, res) => {
    console.log(req.headers["user-agent"]);
    res.status(200).json({'mesaj':'hoşgeldiniz'}); 
});

app.use(hataMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} portundan server ayaklandırıldı`); 
});