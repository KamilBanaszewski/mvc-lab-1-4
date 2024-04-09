const express = require('express');
const bodyParser = require('body-parser');
const studentsController = require('./controllers/students');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('Home', { title: 'Home' });
});

app.get('/success', studentsController.getAddingNewStudentSuccessPage);
app.get('/students-list', studentsController.getStudentsListPage);
app.post('/add-student', studentsController.addStudent);

app.use((req, res, next) => {
  res.status(404).render('NotFound', { title: 'Not Found' });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on ${server.address().port}`);
});
