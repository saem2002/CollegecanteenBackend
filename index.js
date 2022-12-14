import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Route from './routes/Route.js'


dotenv.config();
const app = express();

const PORT = process.env.PORT || 9000  ;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/public',express.static('public'));
app.use( '/', Route);


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));



