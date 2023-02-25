const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/api');

// Enable all request
app.use(cors());

// parsing application/json
app.use(express.json());
// parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5500;
app.use('/openai', routes);

app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}!`);
});
