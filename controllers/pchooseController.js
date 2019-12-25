var Pchoose = require('../models/sysmodel').Pchoose;
var Plast = require('../models/sysmodel').Plast;
var userinfo = require('../models/identity');
var Project = require('../models/sysmodel').Pchoose;
var async = require('async')
// Display list of all pchooses.
exports.pchoose_list = function(req, res) {
    Pchoose.fetchAll({
        withRelated:['student',
            { project: function(query) { query.where('Teacher_t_id','=',userinfo.Teacherinfo.t_id); }}]
    })
        .then(function(model) {
            res.render('choose_form', { title: '项目进度', pchoose_list: model} );
        });
};

// Display detail page for a specific pchoose.
exports.pchoose_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: pchoose detail: ' + req.params.id);
};

// Display pchoose create form on GET.
exports.pchoose_create_get = function(req, res) {
    //console.log('in create');
    Plast.fetchAll({
            withRelated:['student',
                { project: function(query) { query.where('Teacher_t_id','=',userinfo.Teacherinfo.t_id); }}]
        })
        .then(function(model) {
            for(var i = 0; i< model.models.length;i++){
                console.log(model.models[i].get('id')+'---------'+model.models[i].get('Student_s_id')+'---------'+model.models[i].get('Project_p_id')+'---'+model.models[i].related('project').get('p_name'));

            }
            // console.log('end-------');
            // console.log('id = '+model.get('id'));
            res.render('student_choose', { title: '选题详细信息', plast_list: model} );
        });

    // var project_li ={};
    // new Project({'Teacher_t_id': userinfo.Teacherinfo.t_id})
    //     .fetch()
    //     .then(function(model) {
    //         // outputs 'Slaughterhouse Five''
    //         project_li = model;
    //         console.log(model.related('student').toJSON());
    //         res.render('student_choose', { title: '选题详细信息', plast_list: model,student_detail:model.related('teacher'),project_detail:model.related('project')} );
    //     });
    // for (project in project_li){
    //     new Plast({'Project_t_id':project.get('id')} )
    //         .fetch({
    //             withRelated:['stuedent','project']
    //         })
    //         .then(function(model) {
    //             // outputs 'Slaughterhouse Five''
    //             project_li = model;
    //             console.log(model.related('student').toJSON());
    //             res.render('student_choose', { title: '选题详细信息', plast_list: model,student_detail:model.related('teacher'),project_detail:model.related('project')} );
    //         });
    // }
};

// Handle pchoose create on POST.
exports.pchoose_create_post = function(req, res) {
    console.log('emmm'+req.body.p_id);
    var temp = {};
    async.parallel(
        {
            get_info:function(callback) {
                new Plast({'id': req.body.p_id}).fetch()
                    .then(function (model) {
                        callback = (null,{s_id: model.get('Student_s_id'), p_id: model.get('Project_p_id')});
                    });
            }
        },function(err,result) {
            var pchoose = new Pchoose({
                Student_s_id: result.s_id,
                Project_p_id: result.p_id, // 1: dog, 2: cat...
            }).save().then(function (model) {
                console.log(model);
                res.send('success');
            }).catch(function (err) {
                console.log(err);
            });
        });
};

// Display pchoose delete form on GET.
exports.pchoose_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: pchoose delete GET');
};

// Handle pchoose delete on POST.
exports.pchoose_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: pchoose delete POST');
};

// Display pchoose update form on GET.
exports.pchoose_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: pchoose update GET');
};

// Handle pchoose update on POST.
exports.pchoose_update_post = function(req, res) {

};