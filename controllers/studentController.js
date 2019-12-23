var Student = require('../models/sysmodel').Student;



// Display list of all books.
exports.student_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Student list');
};

// Display detail page for a specific book.
exports.student_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Student detail: ' + req.params.id);
};

// Display book create form on GET.
exports.student_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Student create GET');
};

// Handle book create on POST.
exports.student_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Student create POST');
};

// Display book delete form on GET.
exports.student_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Student delete GET');
};

// Handle book delete on POST.
exports.student_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Student delete POST');
};

// Display book update form on GET.
exports.student_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Student update GET');
};

// Handle book update on POST.
exports.student_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Student update POST');
};