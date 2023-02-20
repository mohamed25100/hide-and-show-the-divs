const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;

app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('index', { message: 'Hello, World!'});
});

app.listen(3000, () => {
  console.log(`http://localhost:${port}/`);
});