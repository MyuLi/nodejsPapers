const db = require('../db');


const Teacher = db.bookshelf.Model.extend({
    tableName: 'teacher',
    project:function () {
        return this.hasMany(Project,'Teacher_t_id','t_id');
    }
});

const Project = db.bookshelf.Model.extend({
    tableName: 'project',
    teacher: function() {
        return this.belongsTo(Teacher,'Teacher_t_id','t_id');
    },
    plast: function() {
        return this.hasMany(Plast,'Project_p_id','id');
    },
    pchoose: function() {
        return this.hasMany(Pchoose,'Project_p_id','id');
    }
});

const Student = db.bookshelf.Model.extend({
    tableName: 'student',
    plast: function() {
        return this.hasOne(Plast,'Student_s_id','s_id');
    },
    pchoose:function () {
        return this.hasOne(Pchoose,'Student_s_id','s_id');
    }
});
const Pchoose = db.bookshelf.Model.extend({
    tableName: 'pchoose',
    project: function() {
        return this.belongsTo(Project,'Project_p_id','id');
    },
    student:function () {
        return this.belongsTo(Student,'Student_s_id','s_id');
    },
    task:function () {
        return this.hasMany(Task,'Pchoose_pc_id','pc_id')  ;
    }
});

const Plast = db.bookshelf.Model.extend({
    tableName: 'plast',
    project: function() {
        return this.belongsTo(Project,'Project_p_id','id');
    },

    student:function () {
        return this.belongsTo(Student,'Student_s_id','s_id')
    }
});

const Task = db.bookshelf.Model.extend({
    tableName: 'task',
    pchoose:function () {
        return this.belongsTo(Pchoose);
    }
});

module.exports = {
    Teacher: Teacher,
    Student: Student,
    Project: Project,
    Pchoose: Pchoose,
    Plast: Plast,
    Task: Task
}