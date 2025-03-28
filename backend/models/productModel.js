import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  registrationNumber : String,
  name: { type: String, required: true },
  category: String,
  description: String,
  transactionType: { type: [String], default: [] }, // e.g., ["import"], ["export"]
  materials: [
    {
      name: String,
      percentage: Number // Represents the proportion of this material
    }
  ],
  marketResearch: {
    analysis: String,
    conductedBy: String,
    date: Date
  },
  exportDocumentation: {
    documentsList: [String], // e.g., ["Bill of Lading", "Certificate of Origin"]
    preparedBy: String,
    date: Date
  },
  shippingDetails: {
    logisticsProvider: String,
    trackingNumber: String,
    dispatchDate: Date,
    deliveryDate: Date
  },
  financialInfo: {
    exchangeRateAtShipment: Number,
    transactionReference: String,
    riskAssessment: String
  },
  price: {
    amount: Number,
    currency: String
  },
  quantity: Number,
  expiryDetails: {
    expiryDate: Date
  },
  manufacturingDetails: {
    manufacturer: String,
    productionDate: Date,
    batchNumber: String
  },
  authorizedBy : [
    {
      name : String,
      id : String,
    }
  ],
  images: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);
export default Product;
