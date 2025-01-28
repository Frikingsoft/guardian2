import mongoose from 'mongoose'

//FUNCIONARIOS
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    num_employee: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ["On Duty", "Off Duty", "On Patrol", "On Break"],
        default: "Off Duty"
    },
    tel: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    entry_date: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ["admin", "employee"],
        required: true
    }

}, { collection: 'Employees' })

export default mongoose.model('Employee', employeeSchema)