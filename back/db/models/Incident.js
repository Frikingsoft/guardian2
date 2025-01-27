import mongoose from 'mongoose';

//INCIDENTES
const incidentSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    id_local: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Local',
        required: true
    },
    id_employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    timedate: {
        type: Date,
        default: Date.now
    },
    multimedia: [{
        images: [],
        videos: [],
        audios: []
    }]
}, { collection: 'Incidents' })

export default mongoose.model('Incident', incidentSchema)