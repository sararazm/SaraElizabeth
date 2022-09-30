const express = require('express')
const router = require('express').Router()
const PORT = process.env.PORT || 3000
const cors = require('cors');
const app= express()

app.use(cors());
app.use = (express.json())


app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})
