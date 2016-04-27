class ProductController {
  constructor(ProductsService, $http) {
    this._$http = $http;
    this._ProductsService = ProductsService;
    this.products = [];
    this.product = "";
  }
}

export default ProductController
