const express = require('express');
const app = express();
require("./db/conn");

const port = process.env.PORT || 6000;

app.get('/',(req,res)=> {
    res.send("helloo world");
});

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});