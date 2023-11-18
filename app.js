require('./database/sync');

const express = require('express');
const app= express();
const port= process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.listen(port, ()=>{
    console.log('The application is running on port'+port)
});


