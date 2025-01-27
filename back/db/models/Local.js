import mongoose from 'mongoose';

//LOCALES
const localSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, { collection: 'Locals' })

export default mongoose.model('Local', localSchema);