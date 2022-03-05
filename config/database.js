const mongoose = require("mongoose")

const connectDatabase=()=>{
    mongoose.connect("mongodb://localhost:27017/EcommerceDb",{ useNewUrlParser: true,
useUnifiedTopology: true})
.then((data)=>{
console.log("db connect",data.connection.host)
})
}

module.exports=connectDatabase
