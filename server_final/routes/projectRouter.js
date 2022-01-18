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
});

projectRouter.route('/:projectId/joinTeam')
.put((req, res, next) => {
    Project.findById(req.params.projectId)
    .then(project => {
        console.log(project.owner._id);
        console.log(req.body.user);
        if (project) {
            if (project.teamIDs.length >= project.teamSize) {
                err = new Error('Team is already full. Cannot join.');
                err.status = 404;
                return next(err);
            } else if (project.teamIDs.includes(req.body.user)) {
                err = new Error('You are already a part of this team. Cannot join');
                err.status = 404;
                return next(err);
            } else if (project.owner.equals(req.body.user)) {
                err = new Error('You are the project owner. Cannot join');
                err.status = 404;
                return next(err);
            } 
            else {
                project.teamIDs.push(req.body.user);
                project.save()
                .then(project => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(project);
                })
                .catch(err => next(err));
            }
        } else {
            err = new Error(`Project ${req.params.projectId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
})

module.exports = projectRouter;