const  express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 8000
const mongoose = require('mongoose')
const UsersRoutes = require('./Routes/user.routes')
const shipmentRoutes = require('./Routes/shipment.routes')
const path = require('path')
// const bodyParser = require('body-parser')

// middle wares
  // cross origin resources sharing middleware
app.use(cors())
  // takes parsed json request and puts the data in req.body
app.use(express.json())
  // then no need fore this app.use(bodyParser.json())

// i already allowed all cors request above, its still equivalent to the chunk code below
// app.use((req, res, next)=> {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "*"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
//   );
//   next();
// });
// 


// serve static
// app.get('/', (req, res) => res.send('Hello World!'))


// The two routes in this project.

  // user routes
  app.use('/api/users', UsersRoutes)

  // shipments routes
  app.use('/api/shipments',shipmentRoutes)


// ------------------ deployment ----------------

__dirname = path.resolve();

// Here we are saying if we are in production mode
// we want to look for the static files such as html and css from the wd/client/build

  if(process.env.NODE_ENV === 'production'){
     app.use(express.static(path.join(__dirname,'client','build')))
    // for any routes not registered here 
    // we want to return only the index.html from the html file


     app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
     })}
  else{
  app.get('/',(req,res)=>{
    res.send('Api is running...')
  })
}

// database connection
const uri = process.env.uri
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>app.listen(port,()=>{
    console.log(`listening at port http://localhost:${port}`)
})).then(()=> console.log("Connected to MongoDB successfully")).catch(err=>console.log(err))

