const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/contentful-webhook', (req, res) => {
  const payload = req.body;
  console.log(req.body, ' this is the req.body');
  console.log(req, ' this is the req');
  // Parse the payload and process the data
  console.log('Received webhook payload:', payload);
  
  res.status(200).send('Webhook received successfully');
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});

