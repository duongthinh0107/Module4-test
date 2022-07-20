
import {Schema, model} from "mongoose";

const branch = new Schema({
    name: String
})

const BranchModel = model('branch', branch);

export {BranchModel}