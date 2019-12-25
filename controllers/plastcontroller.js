var Plast = require('../models/sysmodel').Plast;
var Project = require('../models/sysmodel').Project;
var userinfo = require('../models/identity');

// Display list of all books.
exports.plast_list = function(req, res) {
    //TODO 已选题的学生不能再次选择
    Plast.fetchAll({
        withRelated:['student',

            { project: function(query) { query.where('Teacher_t_id','=',userinfo.Teacherinfo.t_id); }}]
    })
        .then(function(model) {
            // console.log('end-------');
            // console.log('id = '+model.get('id'));
            res.render('student_choose', { title: '申请选题', plast_list: model} );
        });
};

// Display detail page for a specific book.
exports.plast_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: plast detail: ' + req.params.id);
};

// Display book create form on GET.
exports.plast_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: plast create GET');
};

// Handle book create on POST.
exports.plast_create_post = function(req, res) {
    var plast = new Plast({
        Student_s_id: userinfo.STudentinfo.s_id,
        Project_p_id: req.body.content, // 1: dog, 2: cat...
    }).save().then(function(model){
        console.log(model);
    }).catch(function(err) {
        console.log(err);
    });
};

// Display book delete form on GET.
exports.plast_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: plast delete GET');
};

// Handle book delete on POST.
exports.plast_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: plast delete POST');
};

// Display book update form on GET.
exports.plast_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: plast update GET');
};

// Handle book update on POST.
exports.plast_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: plast update POST');
};