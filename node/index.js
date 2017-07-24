var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var crypto = require('crypto');

var port = process.env.PORT || 5000;

var WEBHOOK_SECRET = 'YOUR_WEBHOOK_SECRET'

app.use(bodyParser.json({ verify: verify, type: 'application/json' }));

app.post('/webhook', function(req, res) {
  // Here is the webhook data
  var data = req.body.data;

  res.sendStatus(200);
})

app.listen(port, function() {
  console.log('Listening on port: ' + port)
})

function verify(req, res, buf, encoding) {
  if (req.headers['x-button-signature'] !== signature(buf)) {
    throw new Error('Invalid Webhook Signature');
  }
}

function signature(requestBody) {
  return crypto.createHmac('sha256', WEBHOOK_SECRET)
    .update(requestBody)
    .digest('hex');
}
