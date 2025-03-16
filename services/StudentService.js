const StudentModel = require('../models/Student');

exports.getAllStudents = async() => {
    return await StudentModel.find();
};

exports.getStudentsWithFilters = async(name, address) => {
    const query = {};

    if (address) {
        query.address = { $regex: address, $options: 'i' };
    }

    if (name) {
        query.name = { $regex: name, $options: 'i' };
    }

    return await StudentModel.find(query);
}

exports.createStudent = async(student) => {
    return await StudentModel.create(student);
};

exports.getStudentById = async(id) => {
    return await StudentModel.findById(id);
};

exports.updateStudent = async(id, student) => {
    return await StudentModel.findByIdAndUpdate(id, student);
}

exports.deleteStudent = async(id) => {
    return await StudentModel.findByIdAndDelete(id);
}