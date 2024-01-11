const express = require('express');
const authenticate= require('../middleware/authenticate')

const users = express.Router();
const user = require('../controllers/users');
const authrole = require('../middleware/authorise');


users.get("/users", user.usersget)

users.post('/adduser', authenticate,authrole, user.userpost);

users.post('/login', user.userlogin);

users.patch("/ip-users/:id",authenticate,authrole, user.userpatch)

users.delete("/del-users/:id",authenticate,authrole, user.userdelete)

module.exports = users;