const express = require('express');
const cors = require('cors');
const path = require("path");

const ipRoutes = require('./Routes/ipRoutes');
const errorHandler = require("./Middleware/errorHendler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"../public")));
app.use('/api/ip', ipRoutes);
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/ip.html"));
});
app.use(errorHandler);

module.exports = app;