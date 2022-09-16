const  express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 8000
const mongoose = require('mongoose')
const UsersRoutes = require('./Routes/user.routes')
const shipmentRoutes = require('./Routes/shipment.routes')
const path = require('path')
const bodyParser = require('body-parser')

// middle wares

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


// Cors above


// serve static
// app.get('/', (req, res) => res.send('Hello World!'))

// user routes
app.use('/api/users', UsersRoutes)

// // shipments routes
app.use('/api/shipments',shipmentRoutes)

// ------------------ deployment ----------------

__dirname = path.resolve();
if(process.env.NODE_ENV === 'production'){
     app.use(express.static(path.join(__dirname,'client','build')))

     app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
     })
}else{
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

