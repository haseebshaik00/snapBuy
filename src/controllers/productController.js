import { Product } from '../config/dbConfig.js';

const productController = {};

productController.getProducts = async (req, res) => {
    try{
        const productsData = await Product.findAll();
        if(!productsData)
            res.status(204).json(productsData);    
        res.status(200).json(productsData);
    }
    catch (err){
        res.status(500).json({error: "Error fetching products!", details: err});
    }
}

productController.addProduct = async (req, res) => {
    try{
        if (isNaN(parseFloat(req.body.price)))
            return res.status(400).json({ error: "Price must be a valid number" });
        const product = {
            name: req.body.name,
            price: req.body.price
        }
        const productData = await Product.create(product);
        res.status(201).json(productData);
    }
    catch (err){
        res.status(500).json({error: "Error adding product!", details: err});
    }
}
 
export default productController;