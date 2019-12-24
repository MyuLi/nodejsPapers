var Project = require('../models/sysmodel').Project;
var Teacher = require('../models/sysmodel').Teacher;
var Student = require('../models/sysmodel').Student;
var Plast = require('../models/sysmodel').Plast;
var Pchoose = require('../models/sysmodel').Pchoose;
var Task = require('../models/sysmodel').Task;

var async = require('async');

const validator = require('express-validator');
var userinfo = require('../models/identity');

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
            console.log('__________'+project_list);
            res.render('project_list',{ title: 'Projects List', project_list: project_list })
        })
     /*   Book.find({}, 'title author')
            .populate('author')
            .exec(function (err, list_books) {
                if (err) { return next(err); }
                //Successful, so render
                res.render('book_list', { title: 'Book List', book_list: list_books });
            });*/
};

// Display detail page for a specific project.
exports.project_detail = function(req, res) {
    console.log('in detail project');
    new Project({'p_id': req.params.id})
        .fetch({
            withRelated:['teacher']
        })
        .then(function(model) {
            // outputs 'Slaughterhouse Five''
            console.log(model.related('teacher').toJSON());
            res.render('project_detail', { title: '选题详细信息', project_detail: model,teacher_detail:model.related('teacher')} );
        });
};

// Display project create form on GET.
exports.project_create_get = function(req, res) {
    console.log('get method');
    res.render('project_form', { title: 'Create Project' });
};

// Handle project create on POST.
exports.project_create_post =  [

    // Validate that the name field is not empty.
    validator.body('name', 'Project name required').isLength({ min: 1 }).trim(),

    // Sanitize (escape) the name field.
    validator.sanitizeBody('name').escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validator.validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var project = new Project({
            p_name: req.body.name,
            p_info: req.body.p_info, // 1: dog, 2: cat...
            max_snum: req.body.max_snum,
            limit_num:req.body.limit_num,
            Teacher_t_id:userinfo.Teacherinfo.s_id
        }).save().then(function(model){
            console.log(model);
        }).catch(function(err) {
            console.log(err);
        });


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('project_form', { title: 'Create Project', project: project, errors: errors.array()});
            return;
        }
        else {
            // Data from form is valid.
            // Check if Genre with same name already exists.
            // Genre.findOne({ 'name': req.body.name })
            //     .exec( function(err, found_genre) {
            //         if (err) { return next(err); }
            //
            //         if (found_genre) {
            //             // Genre exists, redirect to its detail page.
            //             res.redirect(found_genre.url);
            //         }
            //         else {
            //
            //             genre.save(function (err) {
            //                 if (err) { return next(err); }
            //                 // Genre saved. Redirect to genre detail page.
            //                 res.redirect(genre.url);
            //             });
            //
            //         }
            //
            //     });
            //TODO 成功创建项目后
        }
    }
];

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