const express = require('express');

const server = express();
server.use(express.json());

const projects = [];

// MIDDLEWARE QUE VERIFICA SE O PROJETO EXISTE
function checkProjectExists(req, res, next) {
  let projetoBuscado = projects.find(proj => proj.id == req.params.id);

  if (!projetoBuscado) {
    return res.status(404).json({ error: 'Project not found.' });
  }

  req.projetoBuscado = projetoBuscado;

  req.parametrosDoProjetoBuscado = {
    index: projects.indexOf(projetoBuscado),
    id: projetoBuscado.id,
    title: req.body.title
  };

  return next();
}

function preventProjectsDuplication(req, res, next) {

  let projectNome = projects.find(proj => proj.title == req.body.title);
  console.log(projectNome);

  if (projects.length < 1) {
    if (typeof (projectNome) == 'undefined') {
      return next();
    }
  } else {
    if (typeof (projectNome) !== 'undefined') {
      return res.status(404).json({ error: `There's already a project called ${req.body.title}` });
    } else {

      return next();
    }
  }

}

function geradorId() {
  return projects.length + 1;
}

//ROTA DE LISTAGEM DOS PROJETOS
server.get('/projects', (req, res) => {
  return res.json(projects);
});

//ENCONTRA PROJETO PELO ID
server.get('/projects/:id', checkProjectExists, (req, res) => {
  // O MIDDLEWARE checkProjectExists já se encarrega de buscar por Id.
  //  O projeto encontrado "project"
  // é colocado na requisição atráves da linha req.project = project
  return res.json(req.projetoBuscado);
});

//ROTA DE CADASTRO DOS PROJETOS
server.post('/projects', preventProjectsDuplication, (req, res) => {
  const { title } = req.body;
  projects.push({
    id: geradorId(),
    title,
    tasks: []
  });
  return res.json(projects);
});

// ROTA DE ATUALIZAÇÃO DE PROJETOS
server.put('/projects/:id', checkProjectExists, (req, res) => {
  req.projetoBuscado.title = req.parametrosDoProjetoBuscado.title;
  return res.json(projects);
});

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  req.projetoBuscado.tasks.push(req.parametrosDoProjetoBuscado.title);
  return res.json(projects);
});

server.delete('/projects/:id', checkProjectExists, (req, res) => {
  projects.splice(req.projetoBuscado.index, 1);
  return res.json(projects);
});

//CONFIGURAÇÃO DA PORTA DO SERVIDOR
server.listen(3000);
