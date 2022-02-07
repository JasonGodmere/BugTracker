import { ListCollectionsCursor, ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const sites = mongoose.Schema({
    id: ObjectId,
    name: String,
    owner: {
        type: ObjectId,
        default: {}
    },
    admin: {
        type: ObjectId,
        default: {}
    },
});

const Sites = mongoose.model('Sites', sites);

export default Sites;