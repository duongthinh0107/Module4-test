"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = void 0;
const mongoose_1 = require("mongoose");
const employee = new mongoose_1.Schema({
    code: String,
    name: String,
    age: Number,
    salary: Number,
    branch: { type: mongoose_1.Schema.Types.ObjectId, ref: "branch" }
});
const EmployeeModel = (0, mongoose_1.model)('employee', employee);
exports.EmployeeModel = EmployeeModel;
//# sourceMappingURL=employee.model.js.map