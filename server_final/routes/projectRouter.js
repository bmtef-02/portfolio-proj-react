const express = require('express');
const Project = require('../models/project');
const authenticate = require('../authenticate');
const cors = require('./cors');
const config = require('../config');
const jwt = require('jsonwebtoken');

const projectRouter = express.Router();

projectRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {  // Get all projects
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
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {     // Create a new project
    const token = req.header('authorization').split(" ")[1];
    const payload = jwt.verify(token, config.secretKey)
    Project.create({
        "title": req.body.title,
        "description": req.body.description,
        "teamSize": req.body.teamSize,
        "category": req.body.category,
        "languages": req.body.languages,
        "yearsofExp": req.body.yearsofExp,
        "owner": payload._id
    })
    .then(project => {
        console.log('Project Create ', project);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, (req, res) => {        // PUT not supported
    res.statusCode = 403;
    res.end('PUT operation not supported on /projects')
})
.delete(cors.corsWithOptions, authenticate.verifyAdmin, (req, res, next) => {     // deletes all documents in project collection
    Project.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

projectRouter.route('/:projectId')
.get((req, res, next) => {
    Project.findById(req.params.projectId)
    .populate('owner')
    .populate('teamIDs')
    .then(project => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    })
    .catch(err => next(err));
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /projects/${req.params.projectId}`);
})
.put((req, res, next) => {
    Project.findById(req.params.projectId)
    .then(project => {
        if (project) {
            if (project.owner.equals(req.body.user)) {
                if (req.body.title) {
                    project.title = req.body.title;
                }
                if (req.body.description) {
                    project.description = req.body.description;
                }
                if (req.body.languages) {
                    project.languages = req.body.languages;
                }
                if (req.body.category) {
                    project.category = req.body.category;
                }
                if (req.body.teamSize) {
                    project.teamSize = req.body.teamSize;
                }
                project.save()
                .then(project => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(project);
                })
                .catch(err => next(err));
            } else {
                err = new Error('You are not the owner of this project. You cannot make changes.');
                err.status = 404;
                return next(err);
            }
        } else {
            err = new Error(`Project ${req.params.projectId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
    Project.findById(req.params.projectId)
    .then(project => {
        if (project) {
            if (project.owner.equals(req.body.user)) {
                Project.findByIdAndDelete(req.params.projectId)
                .then(response => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(response);
                })
                .catch(err => next(err));
            } else {
                err = new Error('You are not the owner of this project. You cannot delete this project.');
                err.status = 404;
                return next(err);
            }
        } else {
            err = new Error(`Project ${req.params.projectId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
})

projectRouter.route('/:projectId/joinTeam')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.put(cors.corsWithOptions, (req, res, next) => {
    Project.findById(req.params.projectId)
    .then(project => {
        console.log(project.owner._id);
        console.log(req.body.user);
        if (project) {
            if (project.teamIDs.length >= project.teamSize) {
                err = new Error('Team is already full. Cannot join.');
                err.status = 404;
                // console.log(err);
                res.statusMessage = 'Team is already full. Cannot join';
                res.statusCode = 404;
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