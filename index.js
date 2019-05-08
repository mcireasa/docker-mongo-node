const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Conectare la MongoDB
//la link-ul de conectare specificam mongo deoarece acesta este serviciul pe care il vom folosi
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('Conectare la baza de date a reusit!'))
  .catch(err => console.log(err));

const Form = require('./models/Item');

app.get('/', (req, res) => {
  const forms = Form.findAll()
    .then(res.json(forms))
    .catch(err => res.status(404).json({ msg: 'Baza de date este goala' }));
});

app.post('/item/add', (req, res) => {
  const newForm = new Form({
    user_name: req.body.user_name,
    user_email: req.body.user_email,
    user_msg: req.body.user_msg
  });

  newForm.save().then(form => res.redirect('/'));
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));
