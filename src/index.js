const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {db} = require('./config');
const PORT = process.env.PORT; 
const session = require("express-session");
require("dotenv").config();


// Routes export
const createBookings = require('./routes/createBookings.routes');
const login = require('./routes/login.routes')
const register = require('./routes/register.routes')
const listProv = require('./routes/listProv.routes');
const getProv = require('./routes/getProv.routes');
const getListBookings = require('./routes/getListBookings.routes');


const app = express();

const corsOptions ={
  //origin:'http://localhost:3000', 
  origin:'https://curcuma.vercel.app', 
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
app.use(listProv)
app.use(getProv)
app.use(getListBookings)

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

  //Session cookie
  app.use(session({
    secret: process.env.SECRET_KEY,
    credentials: true,
    name: "sid", //sid: session id
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.ENVIRONMENT === "production",
      httpOnly: true,
      sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax"
    }
  }));