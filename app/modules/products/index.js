import angular from 'angular';

import config from './config';
import productController from './controllers/product_controller';
import productsController from './controllers/products_controller';
import service from './service';

let products = angular.module('tiy.products', []);


products.config(config);
products.controller('ProductsController', productsController);
products.controller('ProductController', productController);
products.service('ProductsService', service);

export default products;
