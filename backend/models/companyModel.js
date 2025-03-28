import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  registrationNumber: { type: String, required: true },

  contactInfo: {
    email: { type: String, required: true },
    phone: String,
    website: String
  },

  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String
  },

  businessType: { type: [String], default: [] }, // e.g., ["importer", "exporter"]
  industry: String,

  documentation: {
    panNumber: String,     
    vatNumber: String,
    gstNumber: String,
    iecNumber: String,
    businessLicense: String
  },

  financialInfo: {
    bankName: String,
    accountNumber: String
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Company = mongoose.model("Company", companySchema);
export default Company;
