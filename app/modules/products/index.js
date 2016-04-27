import angular from 'angular';

import config from './config';
import controller from './controller';
import service from './service';

let products = angular.module('tiy.products', []);

products.config(config);
products.controller('ProductsController', controller);
products.controller('ProductController', controller);
products.service('ProductsService', service);

export default products
