const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const mongoose = require('mongoose');
const db =
  'mongodb+srv://admin:admin@giuliadatabase.nzmat.mongodb.net/userDB?retryWrites=true&w=majority';

mongoose.connect(db, (err) => {
  if (err) {
    console.log('Db Not Connected' + err);
  } else {
    console.log('Connected to User DB');
  }
});
router.get('/', (req, res) => {
  res.send('From Api');
});
router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(200).send(registeredUser);
    }
  });
});
router.post('/login', (req, res) => {
  let userData = req.body;
  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send('Invalid email');
      } else {
        if (user.password !== userData.password) {
          res.status(401).send('Invalid password');
        } else {
          res.status(200).send(user);
        }
      }
    }
  });
});
router.get('/speciali', (req, res) => {
  let events = [
    {
      firstName: 'Alex',
      lastName: 'Bucur',
      sickness: 'Bello',
      createdAt: new Date(),
      lastUpdated: new Date(),
      totalConst: 20005,
      value: '$',
    },
    {
      firstName: 'Alex',
      lastName: 'Bucur',
      sickness: 'Bello',
      createdAt: new Date(),
      lastUpdated: new Date(),
      totalConst: 20005,
      value: '$',
    },
    {
      firstName: 'Alex',
      lastName: 'Bucur',
      sickness: 'Bello',
      createdAt: new Date(),
      lastUpdated: new Date(),
      totalConst: 20005,
      value: '$',
    },
    {
      firstName: 'Alex',
      lastName: 'Bucur',
      sickness: 'Bello',
      createdAt: new Date(),
      lastUpdated: new Date(),
      totalConst: 20005,
      value: '$',
    },
  ];
  res.json(events);
});

router.get('/patienti', (req, res) => {
  let events = [
    {
      firstName: 'Alex',
      lastName: 'Bucur',
      sickness: 'Bello',
      createdAt: new Date(),
      lastUpdated: new Date(),
      totalConst: 20005,
      value: '$',
    },
    {
      firstName: 'Alex',
      lastName: 'Bucur',
      sickness: 'Bello',
      createdAt: new Date(),
      lastUpdated: new Date(),
      totalConst: 20005,
      value: '$',
    },
    {
      firstName: 'Alex',
      lastName: 'Bucur',
      sickness: 'Bello',
      createdAt: new Date(),
      lastUpdated: new Date(),
      totalConst: 20005,
      value: '$',
    },
    {
      firstName: 'Alex',
      lastName: 'Bucur',
      sickness: 'Bello',
      createdAt: new Date(),
      lastUpdated: new Date(),
      totalConst: 20005,
      value: '$',
    },
  ];
  res.json(events);
});
module.exports = router;
