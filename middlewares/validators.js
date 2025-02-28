exports.validateProduct = (req, res, next) => {
    const {name, stockLevel, warehouseId } = req.body;

    if(!name || typeof stockLevel !== 'number' || typeof warehouseId !== 'number' || stockLevel < 0){
        return res.status(400).json({error: "Invalid Product Data"});
    }

    next();
};