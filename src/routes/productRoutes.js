import express from 'express';
import productController from '../controllers/productController.js';

const productRoutes = express.Router();

productRoutes.get('/', productController.getProducts);
productRoutes.post('/', productController.addProduct);

export default productRoutes;