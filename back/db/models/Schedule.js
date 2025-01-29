import mongoose from 'mongoose';

//HORARIOS
const scheduleSchema = new mongoose.Schema({
    id_employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    id_local: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Local',
        required: true
    },
    time_patrol_start: {
        type: Date
    },
    time_patrol_end: {
        type: Date
    },
    schedule_start: {
        type: String
    },
    schedule_end: {
        type: String
    },
    date: {
        type: Date,
        required: true
    }
}, { collection: 'Schedules' })

export default mongoose.model('Schedule', scheduleSchema);