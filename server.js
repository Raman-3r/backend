const app = require('./app')
const dotenv=require('dotenv')
const connectDatabase=require('./config/database')

// config
dotenv.config({path:"backend/config/config.env"})
//connect db
connectDatabase();
const server=app.listen(process.env.PORT,()=>{
  console.log("server run")
})
///unhandled promise rejection
process.on("unhandledRejection",err=>{
  console.log(`error:${err.message}`);
  console.log("shutting down the server due to unhandled rejection")
  server.close(()=>{
    process.exit(1);
  })
})