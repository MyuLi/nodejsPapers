var express = require('express');
var router = express.Router();

// Require controller modules.
var student_controller = require('../controllers/studentController');
var project_controller = require('../controllers/projectController');
var pchoose_controller = require('../controllers/pchooseController');
var teacher_controller = require('../controllers/teacherController');
var task_controller =  require('../controllers/taskController');
var plast_controller = require('../controllers/plastcontroller');

var signature_Controller = require('../controllers/signatrueContorller');
/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', project_controller.index);

// GET request for creating project. NOTE This must come before route for id (i.e. display project).
router.get('/project/create', project_controller.project_create_get);

// POST request for creating project.
router.post('/project/create', project_controller.project_create_post);

// GET request to delete project.
router.get('/project/:id/delete', project_controller.project_delete_get);

// POST request to delete project.
router.post('/project/:id/delete', project_controller.project_delete_post);

// GET request to update project.
router.get('/project/:id/update', project_controller.project_update_get);

// POST request to update project.
router.post('/project/:id/update', project_controller.project_update_post);

// GET request for one project.
router.get('/project/:id', project_controller.project_detail);

// GET request for list of all projects.
router.get('/projects', project_controller.project_list);

/// GENRE ROUTES ///

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/student/create', student_controller.student_create_get);

// POST request for creating Book.
router.post('/student/create', student_controller.student_create_post);

// GET request to delete Book.
router.get('/student/:id/delete', student_controller.student_delete_get);

// POST request to delete Book.
router.post('/student/:id/delete', student_controller.student_delete_post);

// GET request to update Book.
router.get('/student/:id/update', student_controller.student_update_get);

// POST request to update Book.
router.post('/student/:id/update', student_controller.student_update_post);

// GET request for one Book.
router.get('/student/:id', student_controller.student_detail);

// GET request for list of all Book items.
router.get('/students', student_controller.student_list);


// GET request for creating a pchoose. NOTE This must come before route that displays pchoose (uses id).
router.get('/pchoose/create', pchoose_controller.pchoose_create_get);

//POST request for creating pchoose.
router.post('/pchoose/create', pchoose_controller.pchoose_create_post);

// GET request to delete pchoose.
router.get('/pchoose/:id/delete', pchoose_controller.pchoose_delete_get);

// POST request to delete pchoose.
router.post('/pchoose/:id/delete', pchoose_controller.pchoose_delete_post);

// GET request to update pchoose.
router.get('/pchoose/:id/update', pchoose_controller.pchoose_update_get);

// POST request to update pchoose.
router.post('/pchoose/update', pchoose_controller.pchoose_update_post);

// GET request for one pchoose.
router.get('/pchoose/:id', pchoose_controller.pchoose_detail);

// GET request for list of all pchoose.
router.get('/pchooses', pchoose_controller.pchoose_list);

/// teacher ROUTES ///

// GET request for creating a teacher. NOTE This must come before route that displays teacher (uses id).
router.get('/teacher/create', teacher_controller.teacher_create_get);

// POST request for creating teacher.
router.post('/teacher/create', teacher_controller.teacher_create_post);

// GET request to delete teacher.
router.get('/teacher/:id/delete', teacher_controller.teacher_delete_get);

// POST request to delete teacher.
router.post('/teacher/:id/delete', teacher_controller.teacher_delete_post);

// GET request to update teacher.
router.get('/teacher/:id/update', teacher_controller.teacher_update_get);

// POST request to update teacher.
router.post('/teacher/:id/update', teacher_controller.teacher_update_post);

// GET request for one teacher.
router.get('/teacher/:id', teacher_controller.teacher_detail);

// GET request for list of all teacher.
router.get('/teachers',teacher_controller.teacher_list);

/// plast ROUTES ///

// GET request for creating a teacher. NOTE This must come before route that displays teacher (uses id).
router.get('/plast/create', plast_controller.plast_list);

// POST request for creating teacher.
router.post('/plast/create', plast_controller.plast_create_post);

// GET request to delete teacher.
router.get('/teacher/:id/delete', teacher_controller.teacher_delete_get);

// POST request to delete teacher.
router.post('/teacher/:id/delete', teacher_controller.teacher_delete_post);

// GET request to update teacher.
router.get('/teacher/:id/update', teacher_controller.teacher_update_get);

// POST request to update teacher.
router.post('/teacher/:id/update', teacher_controller.teacher_update_post);

// GET request for one teacher.
router.get('/teacher/:id', teacher_controller.teacher_detail);

// GET request for list of all teacher.
router.get('/plast',teacher_controller.teacher_list);

router.get('/signature',signature_Controller.signature_home);
router.get('/signature/show_history',signature_Controller.signature_history_get);
router.post('/signature/show_history',signature_Controller.signature_history_post);
router.post('/signature/multiple_file_upload',signature_Controller.signature_add);

router.get('/task/student',task_controller.task_list);

module.exports = router;