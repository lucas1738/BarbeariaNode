const express = require('express');

// console.log(express);

const server = express();
server.use(express.json());

//Query params = ?teste=1
//Route params = /users/1
//Request body = {"name": "Diego", "email": "diego@rocketseat.com.br"} => Geralmente é o payload da requisição

//como a rota vai ser manipulada => segundo parâmetro da requisição
// server.get('/teste', (req, res) => {
//MENSAGEM NO TERMINAL DO VS CODE
// console.log('teste');
//MENSAGEM NO NAVEGADOR SEM FORMATAÇÃO JSON
// return res.send('Hello World');
//MENSAGEM NO NAVEGADOR COM FORMATAÇÃO JSON
// const nome = req.query.nome;
// return res.json({ message: `Hello ${nome}` });

// ---------------------------------

/*
 */

const users = ['Robson', 'Cláudio', 'Victor'];

server.use((req, res, next) => {
  console.log(`The request has method ${req.method} and url ${req.url}`);

  // se o objetivo fosse interceptar a requisição poderia fazer
  // return res.send()
  // já que é para deixar passar a requisição para que outro middleware aproveite deve-se fazer
  req.next();
});

function checkIfUserIsPresent(req, res, next) {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ error: 'User name is required to complete the request!' });
  }
  return next();
}

function checkIfUserExistsInArray(req, res, next) {
  const user = users[req.params.id];

  if (!user) {
    return res.status(400).json({ error: 'User doesn`t exist!' });
  }
  req.user = user;

  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
});
server.get('/users/:id', checkIfUserExistsInArray, (req, res) => {
  const id = req.params.id;
  // OU
  // const { id } = req.params;
  // FUNCIONA DA MESMA FORMA
  return res.json({
    // message: `Hello user number ${id}. Welcome to our barber shop`
    // message: `Welcome ${users[id]}. Our barber shop is ready to best serve you`
    message: `Welcome ${req.user}. Our barber shop is ready to best serve you`
  });
});

server.post('/users', checkIfUserIsPresent, (req, res) => {
  const { nome } = req.body;
  users.push(nome);
  return res.json(users);
});

server.put('/users/:id', checkIfUserIsPresent, (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  users[id] = nome;
  return res.json(users);
});

server.delete('/users/:id', checkIfUserExistsInArray, (req, res) => {
  const { id } = req.params;
  users.splice(id, 1);
  return res.send();
});
// });
server.listen(3000);
