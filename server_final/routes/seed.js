const express = require('express');
const Project = require('../models/project');
const authenticate = require('../authenticate');
const cors = require('./cors');
const projectsSeed = require('../seed/projectSeed.json');

const seedRouter = express.Router();

seedRouter.route('/projects')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.post(cors.corsWithOptions, (req, res, next) => {
    
    Project.insertMany(projectsSeed.projects)
    .then(project => {
        console.log('Projects seeded');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    })
    .catch(err => next(err));
})

module.exports = seedRouter;