import { ListCollectionsCursor, ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const sites = mongoose.Schema({
    name: String,
    owner: ObjectId,
    admins: Array,
    liveBugs: ObjectId,
    deadBugs: ObjectId
});

const Sites = mongoose.model('Sites', sites);

export default Sites;