const express = require('express');
const Project = require('../models/project');
const authenticate = require('../authenticate');

const projectRouter = express.Router();

projectRouter.route('/')
.get((req, res, next) => {  // Get all projects
    Project.find()
    .populate('owner')
    .populate('teamIDs')
    .then(projects => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(projects);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {     // Create a new project
    Project.create(req.body)
    .then(project => {
        console.log('Project Create ', project);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    })
    .catch(err => next(err));
})
.put((req, res) => {        // PUT not supported
    res.statusCode = 403;
    res.end('PUT operation not supported on /projects')
})
.delete(authenticate.verifyAdmin, (req, res, next) => {     // deletes all documents in project collection
    Project.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
})

module.exports = projectRouter;