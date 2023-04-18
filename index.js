const express = require('express');
const app = express();

app.post('/contentful-webhook', (req, res) => {
  const payload = req.body;

  // Parse the payload and process the data
  console.log('Received webhook payload:', payload);

  res.status(200).send('Webhook received successfully');
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});

