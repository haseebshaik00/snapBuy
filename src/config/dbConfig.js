import Sequelize from 'sequelize';
import { users, products } from '../models/model.js';

const db = new Sequelize('shopifyDB', 'shopifyAdmin', 'shopify123', {
    host: 'localhost',
    dialect: 'mysql'
  });

db.authenticate()
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log("DB not connected!", err));

const User = db.define('Users', users);
const Product = db.define('Products', products);

db.sync()
  .then(() => console.log("Databse Synced!"))
  .catch(() => console.log("Databse Not Synced!"));

export {
    db, User, Product
};