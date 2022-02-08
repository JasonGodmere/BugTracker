import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const users = mongoose.Schema({
    _id: ObjectId,
    username: String,
    password: String,
});

const Users = mongoose.model('Users', users);

export default Users;