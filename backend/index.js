const express = require('express')
const app = express()
const port = 3001

const waardelijsten_model = require('./waardelijstenModel')       //dit is de import van alle requests

app.use(express.json())

// app.get('/', (req, res) => {                //deze als check of hij het doet
//   res.status(200).send('Hello World !');
// })

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });

  app.get('/', (req, res) => {
    waardelijsten_model.getHoofdlijnen()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  // app.get('/getHoofdlijnen', (req, res) => {
  //   waardelijsten_model.getHoofdlijnen()
  //   .then(response => {
  //     res.status(200).send(response);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error);
  //   })
  // })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})