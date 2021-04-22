const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv/config')

const app = express()

//parsing json objects
app.use(express.json())

//to get rid of access control allow origin
app.use(cors())

//connecting to db
mongoose.connect(process.env.DB_connection,{useNewUrlParser:true,useUnifiedTopology: true })
.then(()=>{console.log("connected to DB")})
.catch((e)=>{console.log(e)})



//import routes
const postsRoute = require('./routes/courseRoutes')

//creating custom middleware for our route
app.use('/api/course',postsRoute)








 port = process.env.PORT || 3000

app.listen(port,()=>{console.log(`server started on port ${port}`)})

