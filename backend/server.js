const express = require('express')
const router = require('express').Router()
const PORT = process.env.PORT || 3000

const app= express()
app.use = (express.json())


app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})
