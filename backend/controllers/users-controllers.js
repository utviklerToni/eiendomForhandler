const { v4: uuidv4 } = require('uuid');
const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

const USERS = [
  {
    id: 'u1',
    name: 'John Doe',
    email: 'john@mail.com',
    password: 'doe',
  },
  {
    id: 'u2',
    name: 'Timmy Doe',
    email: 'tim@mail.com',
    password: 'tim',
  },
];

exports.getUsers = (req, res, next) => {
  res.json({ users: USERS });
};

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('invalid inputs', 422);
  }
  const { name, email, password } = req.body;

  const userExist = USERS.find((u) => u.email === email);
  if (userExist) {
    throw new HttpError('user exist', 422);
  }

  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };
  USERS.push(createdUser);
  res.status(201).json({ user: createdUser });
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = USERS.find((u) => u.email === email);

  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError('could not identify user, invalid inputs', 401);
  }
  res.json({ message: 'logged in' });
};
