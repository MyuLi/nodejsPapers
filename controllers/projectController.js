var Project = require('../models/sysmodel').Project;
var Teacher = require('../models/sysmodel').Teacher;
var Student = require('../models/sysmodel').Student;
var Plast = require('../models/sysmodel').Plast;
var Pchoose = require('../models/sysmodel').Pchoose;
var Task = require('../models/sysmodel').Task;

var async = require('async');

exports.index = function(req, res) {
    async.parallel({
        project_count: function (callback) {
            Project.count().then((count) => {
                callback(null,count);
            });
        },
        pchoose_count: function (callback) {
            Pchoose.count().then((count) => {
                callback(null,count);
            });
        },
        plast_count: function (callback) {
            Plast.count().then((count) => {
                callback(null,count);
            });
        },
        student_count: function (callback) {
            Student.count().then((count) => {
                callback(null,count);
            });
        },
        task_count: function (callback) {
            Task.count().then((count) => {
                callback(null,count);
            });
        }
    },function (err,results){
        res.render('index',{title:'毕业设计系统',error:err,data:results})
    });
};

// Display list of all projects.
exports.project_list = function(req, res) {
        Project.fetchAll().then(function (project_list) {
            res.render('project_list',{ title: 'Projects List', project_list: project_list })
        })
        Book.find({}, 'title author')
            .populate('author')
            .exec(function (err, list_books) {
                if (err) { return next(err); }
                //Successful, so render
                res.render('book_list', { title: 'Book List', book_list: list_books });
            });
};

// Display detail page for a specific project.
exports.project_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: project detail: ' + req.params.id);
};

// Display project create form on GET.
exports.project_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: project create GET');
};

// Handle project create on POST.
exports.project_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: project create POST');
};

// Display project delete form on GET.
exports.project_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: project delete GET');
};

// Handle project delete on POST.
exports.project_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: project delete POST');
};

// Display project update form on GET.
exports.project_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: project update GET');
};

// Handle project update on POST.
exports.project_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: project update POST');
};