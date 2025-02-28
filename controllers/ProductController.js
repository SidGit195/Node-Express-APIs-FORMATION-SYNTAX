const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
    const { name, description, stockLevel, warehouseId } = req.body;
    try {
        const product = new Product({ name, description, stockLevel, warehouseId });
        const savedProduct = await product.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({message: "Error occured while adding product"});
    }
} 

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    // const stock = req.body;
    try {
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }

        const updateProduct = await Product.findByIdAndUpdate(
            id,
            {$set: { ...req.body }},
            {new: true, runValidators: true}
        );

        res.status(200).json({message: "Product updated Successfully"});
    } catch (error) {
        res.status(500).json({message: "Error occur while updating product"});
    }
}

exports.getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);

        if(!product){
            return res.status(404).json({error: "Product not found"});
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: "Error occured while getting product"});
    }
}