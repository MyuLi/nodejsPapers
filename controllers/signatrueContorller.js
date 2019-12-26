var Student = require('../models/sysmodel').Student;
var fs = require('fs');
var lastsubmit="1.jpg";
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
        title: '签名预览',
        image_dir: '/images/'+lastsubmit
    })
};
exports.signature_history_post=function(req, res) {
    //return res.redirect('/');
    //res.render('project_form', { title: 'Create Project' });
    res.render('image_show',{title:'历史签名',image_dir:res.body.image_dir});
};

// Display book create form on GET.
exports.signature_add = function(req, res) {
        if(req.files == undefined) {
            req.send("您还未选择要上传的图片");
        }else{
            console.log("length---------------")
            console.log(req.files.length)
            console.log("length---------------")
            for(var i=0; i<req.files.length; i++){
                var file_path = req.files[i].path;
                var des_file ='public/images/'+req.files[i].originalname;
                lastsubmit = req.files[i].originalname;
                fs.renameSync(file_path, des_file);
            }
            res.send("上传图片成功");
        }
};

