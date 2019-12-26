var Task = require('../models/sysmodel').Task;

// Display list of all books.
exports.task_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Student list');
};
exports.task_for_eachstudent = function(req, res) {
    new Task({'Pchoose_pc_id': req.params.id})
        .fetchAll()
        .then(function(model) {
            // outputs 'Slaughterhouse Five''
            res.render('task_detail', { title: '已发布任务', task_detail: model} );
        });
};
