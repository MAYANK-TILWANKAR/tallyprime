import mongoose from 'mongoose';

const enquiryDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  moblile:String,
  message: String,
}, {
  timestamps: true
});

export default mongoose.models.EnquiryData || mongoose.model('EnquiryData', enquiryDataSchema);