import {EmployeeModel} from "../models/employee.model";
import {BranchModel} from "../models/branch.model";

module.exports = {
    render: async (req, res, next) => {
        let employees = await EmployeeModel.find().populate({path: "branch", select: "name"});
        const branch = await BranchModel.find()
        res.render('home', {employees: employees,branch: branch});
    },
    getCreate: async (req, res, next) => {
        let branch = await BranchModel.find();
        res.render('create', {branch: branch});
    },
    postCreate: async (req, res, next) => {
        const employee = new EmployeeModel({
            code: req.body.code,
            name: req.body.name,
            age: req.body.age,
            salary: req.body.salary,
            branch: req.body ? req.body.branch : "none",
        });
        await employee.save();
        res.redirect('/employee/')

    },
    getEdit: async (req, res, next) => {
        const employee = await EmployeeModel.findOne({_id: req.params.id});
        const branch = await BranchModel.find();
        res.render('edit', {employee: employee, branch: branch})
    },
    postEdit: async (req, res, next) => {
        try {
            console.log(req.params.id);
            const employee = await EmployeeModel.findOne({_id: req.params.id});
            console.log(employee)
            employee.code = req.body.code;
            employee.name = req.body.name;
            employee.age = req.body.age;
            employee.salary = req.body.salary;
            employee.branch = req.body.branch;
            await employee.save();
            res.redirect('/employee');
        } catch (e) {
            console.log(e.message)
        }
    },
    delete: async (req, res, next) => {
            await EmployeeModel.findOneAndRemove({_id: req.params.id}).lean();
            res.redirect('/employee');
    },
    searchBranch: async (req, res, next) => {
        console.log(req.query)
        let employees = await EmployeeModel.find({branch:req.query.select}).populate({path: "branch", select: "name"});
        const branch = await BranchModel.find()
        res.render('home', {employees: employees,branch: branch});
    },
    detail: async (req, res, next) => {
        const employee = await EmployeeModel.findOne({_id: req.params.id});
        res.render('detail',{employee})
    },
    sort:async (req, res, next) => {
        let employees = await EmployeeModel.find().sort({'age':1}).populate({path: "branch", select: "name"});
        const branch = await BranchModel.find()
        res.render('home', {employees: employees,branch: branch});
    }
}
