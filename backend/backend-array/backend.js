const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.listen(8084);

const developpers = [
  {
    _id: 1,
    nom: 'Wolfang Amadeus Mozart',
    description: 'Wolfgang est un développeur J2EE avec 15 ans d\'expérience',
    tjm: 550
  },
  {
    _id: 2,
    nom: 'Ludwig Van Beethoven',
    description: 'Ludwig Van Beethoven est un magicien du CSS',
    tjm: 450
  },
  {
    _id: 3,
    nom: 'Johann Christian Bach',
    description: 'Johann est débutant en PHP',
    tjm: 350
  },
  {
    _id: 4,
    nom: 'Joseph Haydn',
    description: 'Joseph est un expert .NET reconnu',
    tjm: 750
  },
  {
    _id: 5,
    nom: 'Frédéric Chopin',
    description: 'Frédéric est un vrai pro d\'Angular JS',
    tjm: 550
  }
];

let id_counter = developpers.reduce(function(maxId,dev){
  return maxId < dev._id ? dev._id : maxId;
}, 0) + 1;

app.get('/api/devs', function (req, res) {  
  if(req.query.name) {
    res.json(developpers.filter(nameContains(req.query.name)));
  } else {
    res.json(developpers);
  }
});

app.get('/api/devs/:id', function(req, res) {
  const a = developpers.find(devWithId(req.params.id));
  res.json(a);
});

app.post('/api/devs', function (req, res) {
  req.body._id = id_counter++;
  developpers.push(req.body);
  res.json(req.body);
});

app.put('/api/devs', function (req, res) {
  const idx = developpers.indexOf(developpers.find(devWithId(req.body._id)));
  if (idx > -1) {
    developpers.splice(idx, 1, req.body);
  }
  res.json(req.body);
});

app.delete('/api/devs/:id', function(req, res) {
  const idx = developpers.indexOf(developpers.find(devWithId(req.params.id)));
  if (idx > -1) {
    developpers.splice(idx, 1);
  }
  res.json();
});

function devWithId(id) {
  return function(dev) { return dev._id === parseInt(id);}
}

function nameContains(search) {
  return function(dev) {
    return dev.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  }
}
