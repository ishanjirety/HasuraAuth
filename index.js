
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json())

const insertUser = require('./utils/signup.utils')
const validateUser = require('./utils/login.utils')
const signJwt = require('./utils/signJwt.utils')


// Request Handler
app.post('/hasura/Signup', async (req, res) => {
  const { username, password, profileImg, bio } = req.body.input;
  try {
    const data = await insertUser({ username, password, profileImg, bio });
    console.log(data)
    if (data.errors) {
      return res.status(400).json({
        success: false,
        error: data.errors
      })
    } else {
     return res.json({
    ...data.insert_Users_one
  })
    }
  } catch (e) {
    console.log(e)
    res.status(400).json()
    
  }
});

app.post('/hasura/login', async (req, res) => {
  const { username, password } = req.body.input
  console.log(username,password)
  try {
    const { data: { Users } } = await validateUser({ username, password });

    const token = Users.length > 0 && signJwt(Users[0].id, Users[0].username)
    if (token) {
      if (Users.length > 0) {
        res.status(200).json({
         ...Users[0], token: token 
        })
      } else {
        res.status(401).json({
          success: false,
          error: "Invalid credentials"
        })
      }
    }else{

    }
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message
    })
  }

})
app.listen(3000, () => {
  console.log('server started');
});