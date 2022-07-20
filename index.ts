import express from "express";
import bodyParser from "body-parser";
import employeeRouter from "./src/routes/employee.router";

const dbConnect = require('./src/config/db');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/employee', employeeRouter);

dbConnect().catch(err => console.error(err));

app.listen(port);