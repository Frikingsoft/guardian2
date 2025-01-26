import mongoose from 'mongoose';

//EGRESOS
const outgoSchema = new mongoose.Schema({
    id_employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    outgo_date: {
        type: Date,
        required: true
    },
    motive: {
        type: String,
        required: true
    },
    observations: {
        type: String,
        default: ''
    }
}, { collection: 'Outgoings' })

export default mongoose.model('Outgo', outgoSchema);