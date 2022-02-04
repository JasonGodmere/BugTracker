import mongoose, { Schema } from 'mongoose';

const users = mongoose.Schema({
    username: String,
    password: String,
    site: Schema,
});

const Users = mongoose.model('Users', users);

export default Users;