const express =require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes/index");



const port = 8081
const host ="localhost"
const app = express();
app.use(cors());
app.options('*',cors());
app.use(express.json());
app.use('/',router);

const dburl ="mongodb+srv://rizwan:Mq4RATtRqOaoMOSm@cluster0.erlpx.mongodb.net/rest?retryWrites=true&w=majority" 
mongoose.connect(dburl,{useNewUrlParser:true,useUndefinedTopology:true,useinAndModify:false,useCreateIndex:true})
.then(
    app.listen(port,host,()=>{
        console.log("message?:it's started")
    })
).catch(err => console.log(err));