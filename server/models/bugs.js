import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const bugs = mongoose.Schema({
    created: Date,
    assigned: {
        type: ObjectId, //User ObjectId
        default: null
    },
    description: String,
    status: String,
    site: {
        type: ObjectId, //Site ObjectId
        default: null
    },
});

const Bugs = mongoose.model('Bugs', bugs);

export default Bugs;