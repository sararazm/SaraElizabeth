const express = require('express');
const app= express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", require("./routes/users.js"));;
app.all('*', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})
