const express = require("express");
const app = express();

const mongoose = require(`mongoose`);
require(`dotenv`).config();

mongoose.set("strictQuery",false);

const PORT = 6000 || process.env.port

mongoose
.connect(process.env.MONGODB_LINK)
.then(()=>console.log(`We wereconnected to mongo`))
.catch((err)=>console.log(err))

app.listen(PORT,() => {
    console.log(`Im listenning on  Port ${PORT}`)
})

// Svet-home: s.-@St2wvmV$za@ 

//mongodb+srv://Svet-home:<password>@cluster0.zuuil7w.mongodb.net/?retryWrites=true&w=majority