import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const bugs = mongoose.Schema({
    _id: ObjectId,
    type: String,
    bugs: Array
});

const Bugs = mongoose.model('Bugs', bugs);

export default Bugs;