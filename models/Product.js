const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    stockLevel: {
        type: Number,
        require: true,
        min: 0
    },
    warehouseId: {
        type: Number,
        require: true
    }
});


// Add Indexing
productSchema.index({ name: 1, warehouseId: -1});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;