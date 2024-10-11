import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    dob: {
        type: Date,
        required: false
    },
    number: {
        type: Number,
        required: true
    },
    interest: {
        type: String
    }
  });
  
  const Customer = mongoose.models.customer || mongoose.model("customer", customerSchema);
  
  export default Customer;
  