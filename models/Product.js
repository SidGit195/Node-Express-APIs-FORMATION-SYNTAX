const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    stockLevel: {
        type: Number,
        required: true,
        min: 0
    },
    warehouseId: {
        type: Number,
        required: true
    }
});


// Add Indexing
productSchema.index({ name: 1, warehouseId: -1});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;