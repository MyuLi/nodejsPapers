var Student = require('../models/sysmodel').Student;


// Display list of all books.
exports.signature_home = function(req, res) {
    console.log(req.route);
    res.render('signature');
    //res.render('image_show',{ title: '历史签名', image_dir: '/images/1.jpg' });
};

// Display detail page for a specific book.
exports.signature_history_get = async function(req, res) {
    console.log('in history');
    console.log(req.route);
    //res.render('project_form', { title: 'Create Project' });

    await res.render('image_show', {
        title: 'OA-waf日志',
        image_dir: '/images/1.jpg'
    })
};
exports.signature_history_post=function(req, res) {
    //return res.redirect('/');
    //res.render('project_form', { title: 'Create Project' });
    res.render('image_show',{title:'历史签名',image_dir:res.body.image_dir});
};

// Display book create form on GET.
exports.signature_add = function(req, res) {
    res.send('NOT IMPLEMENTED: Student create GET');
};

