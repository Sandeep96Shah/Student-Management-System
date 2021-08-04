const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const JWT = require('./config/passport_jwt');

app.use('/', require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log(`Error while running on port ${port}`);
    }else{
        console.log(`server is up and running on port ${port}`);
    }
})