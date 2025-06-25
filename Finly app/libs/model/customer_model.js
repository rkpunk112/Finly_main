import { Schema, model } from 'mongoose';

const CustomerSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  address: { type: String, required: true },
  
})

const Customer = model('Customer', CustomerSchema);

export default Customer;
