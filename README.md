# snapBuy: e-commerce App

## Application Structure

## Backend Install and Config
```bash
brew install mysql
brew services start mysql
mysql_secure_installation # set your password
mysql -u root -p # login with password - haseeb123;
```

## Backend Setup
**flow: login root user -> create db -> create user -> use db -> grant access only to the DB -> logout root(exit;) -> login with new user -> check dbs**
```bash
CREATE DATABASE dbName;
CREATE USER 'someuser'@'localhost' IDENTIFIED BY 'somepassword'; # create user - haseeb(user), host(localhost) and haseeb123(password)
GRANT ALL PRIVILEGES ON * . * TO 'someuser'@'localhost';
FLUSH PRIVILEGES;
exit;

mysql -u newUser -p
SHOW DATABASES;
```

## npm setup
```bash
npm init
npm i express hbs mysql2 sequelize
```
- write node_modules folder in .gitignore

## Directory Setup
- public: assets(images, media files), script, style, index.html, views(hbs/ejs files)
- src: app.js, config, controllers, middlewares, models, routes, services, utils
- test: test files (optional)
- README.md and .gitignore

## app.js Setup
```bash
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '../public/views');

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use("/public", express.static(__dirname + "../public"));
# app.use("/todo", todoRoute);

app.listen('4444', () => console.log("Server started on http://localhost:4444"));
```
