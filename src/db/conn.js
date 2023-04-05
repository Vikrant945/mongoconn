const mongoose = require('mongoose');
mongoose.set("strictQuery", false);


mongoose.connect("mongodb+srv://spymaster431k:Vikrant@123@cluster0.tcxwh7j.mongodb.net/?retryWrites=true&w=majority")
// mongoose.connect("mongodb://localhost:27017/contactus1")
.then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log("No connection");
})
