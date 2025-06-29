import { Schema, model } from 'mongoose';
const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})
export default User = model('User', UserSchema);