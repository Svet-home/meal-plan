const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require(`./MealRoutes`)
const routesTwo = require (`./MessageRoutes`)
const cors = require ('cors')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require(`dotenv`).config();

mongoose.set("strictQuery",false);

const PORT = 7000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(()=>console.log(`Мы были подключены к mongo`))
.catch((err)=>console.log(err))

app.use(routes);
app.use(routesTwo);
app.listen(PORT,() => {
    console.log(`Im listenning on  Port ${PORT}`)
})




