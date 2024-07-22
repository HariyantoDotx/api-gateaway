const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config()

const verifyToken = require("./middleware/verifyToken");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const addressRouter = require("./routes/address");
const foodsRouter = require("./routes/foods");
const paymentRouter = require("./routes/order")

const app = express();


app.use(logger('dev'));
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({ extended: false,limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/users/address", addressRouter);
app.use("/foods", verifyToken, foodsRouter);
app.use("/order", verifyToken, paymentRouter)

module.exports = app;
