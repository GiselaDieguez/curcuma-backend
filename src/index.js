const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {db} = require('./config');
const PORT = process.env.PORT; 


// Routes export
const createBookings = require('./routes/createBookings.routes');
const login = require('./routes/login.routes')
const register = require('./routes/register.routes')


const app = express();

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            
  optionSuccessStatus:200
}

// Middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());

//Routes
app.use(createBookings)
app.use(login)
app.use(register)

// Erros
app.use((err, req, res, next) => {
    return res.json({
      message: err.message
    })
  })
  
  app.listen(PORT || 4000)
  
  
  PORT ?
  console.log(`Server on ${PORT}`)
  :
  console.log(`Server on 4000`)