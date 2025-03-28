import Product from "../models/productModel.js";
import Company from "../models/companyModel.js";

export const createProduct = async (req, res) => {
  try {
    // Extract the registration number from the request body
    const { registrationNumber } = req.body;
    
    // Look up the company using the registration number
    const company = await Company.findOne({ registrationNumber });
    if (!company) {
      return res.status(404).json({ error: "Company not found with the given registration number" });
    }
    
    // Assign the company's _id to the product's companyId field
    req.body.companyId = company._id;
    
    // Remove the registrationNumber from the payload so it won't be stored
    delete req.body.registrationNumber;
    
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ error: "Product not found" });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
