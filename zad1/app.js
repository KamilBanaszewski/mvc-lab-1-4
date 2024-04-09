const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('Home', { title: 'Home' });
});

app.get('/success', (req, res) => {
  res.render('Success', { title: 'Success' });
});

app.get('/students-list', (req, res) => {
  res.render('List', { title: 'List' });
});

app.post('/add-student', (req, res) => {
  res.redirect('/students-list');
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on ${server.address().port}`);
});
