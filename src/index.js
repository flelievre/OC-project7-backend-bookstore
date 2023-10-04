/*
  Created by François LELIEVRE
*/

/* Community imports */
const http = require('http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const {
  PORT = 4000,
} = process.env;

/* endpoints imports */
const {
  userSignupHandle,
} = require('./endpoints/userSignup');
const {
  userLoginHandle,
} = require('./endpoints/userLogin');

const app = express();
app.use(cors());
app.use(helmet());

const server = http.Server(app);

app.post('/api/auth/signup', bodyParser.json(), userSignupHandle);
app.post('/api/auth/login', bodyParser.json(), userLoginHandle);

server.listen(PORT, () => console.log(`[+] 🚀 Server listening on port ${PORT}`));
