"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeController = require('../controllers/employee.controller');
const employeeRouter = express_1.default.Router();
employeeRouter.get('/', employeeController.render);
employeeRouter.get('/create', employeeController.getCreate);
employeeRouter.get('/edit/:id', employeeController.getEdit);
employeeRouter.get('/delete/:id', employeeController.delete);
employeeRouter.post('/edit/:id', employeeController.postEdit);
employeeRouter.post('/create', employeeController.postCreate);
employeeRouter.get('/search', employeeController.searchBranch);
employeeRouter.get('/detail/:id', employeeController.detail);
employeeRouter.get('/sort', employeeController.sort);
exports.default = employeeRouter;
//# sourceMappingURL=employee.router.js.map