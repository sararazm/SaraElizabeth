const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: "User's API",
      version: '1.0.0',
      description: "User's API",
    },
    servers: [
      {
        url: `localhost:${PORT}`,
      },
    ],
  },
  apis: ['./swagger.js'],
};

const specs = swaggerJsDoc(options);

const app= express();

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

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
