const { Router } = require ('express');
const { getMessage,saveMessage} = require('./MessageController')
const routerTwo = Router();

routerTwo.post('/saveMessage',saveMessage);

module.exports = routerTwo;