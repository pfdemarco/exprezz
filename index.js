const express = require ('express');
const path = require('path');
const members = require('./members');
const app = express();


const logger = (req, res, next) => {
  console.log('Hello');
  //console.log(req);
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
}
//init middle ware
app.use(logger);

app.get('/api/members', (req,res) => res.json(members));//route gets all mrembers

// app.get('/', (req, res) => {//maker a route
//   res.send('<h1>Hello world!!</h1>');//can put html in here 
//   res.sendFile(path.join(__dirname, "public", 'index.html'));
// });

//set a static folder to run all html out of
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));