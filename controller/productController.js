const Product = require("../models/product");

// Add a new product
const addProduct = async (req, res) => {
  console.log("mainImage");
  try {
    const { productName, description, price, availability } = req.body;
    // Extract the filenames from the alternativeImages paths
    console.log(req.files);
    const Images = req.files
      ? req.files.map((file) => file.path.split("\\").pop())
      : [];

    // Create a new product instance
    const product = new Product({
      productName,
      description,
      price,
      Images,
      availability,
    });

    // Save the product to the database
    await product.save();

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  console.log("getAllProducts");
  try {
    const products = await Product.find();
    console.log(products);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findOne({ _id: productId });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
};
