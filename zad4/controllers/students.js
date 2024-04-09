let students = [];
let nextId = 1;

exports.addStudent = (req, res) => {
  const { fullName, code, fieldOfStudies } = req.body;

  if (!fullName || !code || !fieldOfStudies) {
    return res.status(400).send('All fields are required');
  }
  
  const newStudent = {
    id: nextId++,
    fullName,
    code,
    fieldOfStudies
  };
  students.push(newStudent);

  res.redirect('/success');
};

exports.getAddingNewStudentSuccessPage = (req, res) => {
  res.render('Success', { title: 'Success', message: 'Student has been added with success!' });
};

exports.getStudentsListPage = (req, res) => {
  const students = exports.getStudents(); // Pobranie listy studentów
  res.render('List', { title: 'List', students });
};

exports.getStudents = () => students;
