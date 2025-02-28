// These two approaches are equivalent:

// Approach 1: Using index: true in the field definition
// by approach 1: you can not by default make descending index
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true  // Creates an ascending index on the name field 
    }
});

// Approach 2: Using schema.index() method
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
productSchema.index({ name: 1 });  // Creates an ascending index on the name field 

// 1 -> ascending
// -1 -> descending



// ----------------------------------------------------------------------------------

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true // ✅ Simple index on 'name'
    },
    stockLevel: {
        type: Number, 
        required: true
    },
    warehouseId: {
        type: Number,
        required: true
    }
});

// ✅ Creating a compound index (for faster queries on 'name' and 'warehouseId')
productSchema.index({ name: 1, warehouseId: 1 });

// ✅ Unique index (ensures no duplicate names)
productSchema.index({ name: 1 }, { unique: true });

// ✅ TTL index (document expires after 3600 seconds / 1 hour)
productSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;


// Uses a B-Tree data structure to enable fast searching, sorting, and filtering.


// What Happens in MongoDB Compass?
// When you install MongoDB Compass and create an index:

// MongoDB does not store new entries in sorted order inside the collection.
// Instead, it creates an internal sorted index file that maps values to document locations.
// When you run a query, MongoDB first checks the index (instead of scanning the whole collection).
// If the index contains the value, it retrieves the document directly.
