const express = require("express");
const morgan = require("morgan"); 
const bodyParser = require("body-parser"); 
const router = require('./apiRoutes');
const app = express();
const cors = require('cors')

// change in a bit
// app.use(express.static(path.join(__dirname, './path/to/static/assets')))

// what urls to accept requests from 
const allowedOrigin = process.env.NODE_ENV === 'production'
  ? 'add deployed frontend link later!'
  : 'http://localhost:3000'; 


app.use(cors({
  origin: allowedOrigin, 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204, 
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// any request that comes in with the URL of /api will get handled in the ./apiRoutes folder
console.log('make it to backend')
app.use("/api", router);

// send HTML file for any routes that don't match our routes
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./path/to/index.html"));
});

// will handle 500 errors
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app