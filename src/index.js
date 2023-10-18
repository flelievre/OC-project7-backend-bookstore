/*
  Created by François LELIEVRE
*/

/* Community imports */
const http = require('http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const multer = require('multer');
const {
  verifyToken,
} = require('./middlewares');

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
const {
  booksGetHandle,
} = require('./endpoints/booksGet');
const {
  booksBestRatingHandle,
} = require('./endpoints/booksBestRating');
const {
  bookGetHandle,
} = require('./endpoints/bookGet');
const {
  bookAddHandle,
} = require('./endpoints/bookAdd');

const app = express();
app.use(cors());
app.use(helmet());

const server = http.Server(app);

const storage = multer.memoryStorage();
const upload = multer({ storage }).single('image');

app.post('/api/auth/signup', bodyParser.json(), userSignupHandle);
app.post('/api/auth/login', bodyParser.json(), userLoginHandle);
app.get('/api/books', bodyParser.json(), booksGetHandle);
app.get('/api/books/bestrating', bodyParser.json(), booksBestRatingHandle);
app.get('/api/books/:id', bodyParser.json(), bookGetHandle);

app.post('/api/books', verifyToken, upload, bookAddHandle);

server.listen(PORT, () => console.log(`[+] 🚀 Server listening on port ${PORT}`));
