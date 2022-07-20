
import {Schema, model} from "mongoose";

const employee = new Schema({
    code:String,
    name: String,
    age: Number,
    salary: Number,
    branch: {type: Schema.Types.ObjectId, ref: "branch"}
})

const EmployeeModel = model('employee', employee);

export {EmployeeModel}