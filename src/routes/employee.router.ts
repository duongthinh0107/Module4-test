import express from "express";

const employeeController =require('../controllers/employee.controller')
const employeeRouter = express.Router();

employeeRouter.get('/',employeeController.render);
employeeRouter.get('/create',employeeController.getCreate);
employeeRouter.get('/edit/:id',employeeController.getEdit);
employeeRouter.get('/delete/:id',employeeController.delete);
employeeRouter.post('/edit/:id',employeeController.postEdit);
employeeRouter.post('/create',employeeController.postCreate);
employeeRouter.get('/search',employeeController.searchBranch);
employeeRouter.get('/detail/:id',employeeController.detail);
employeeRouter.get('/sort',employeeController.sort);

export default employeeRouter;