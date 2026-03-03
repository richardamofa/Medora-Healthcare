import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  phone: { type: String, required: true },
  availability: { type: Boolean, default: true },
});

export const Doctor = mongoose.model('Doctor', doctorSchema);