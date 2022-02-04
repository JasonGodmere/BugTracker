import mongoose from 'mongoose';

const bugs = mongoose.Schema({
    created: Date,
    description: String,
    //assigned: Users (schema),
});

const Bugs = mongoose.model('Bugs', bugs);

export default Bugs;