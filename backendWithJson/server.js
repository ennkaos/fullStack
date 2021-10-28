const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api/api.js');
const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server was init!!');
});
app.use('/api', api);
//mongodb+srv://admin:<password>@giuliadatabase.nzmat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
app.listen(PORT, () => {
  console.log('Server Running on ' + PORT);
});
