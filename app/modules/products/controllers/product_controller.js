class ProductController {
  constructor(ProductsService, $http, $stateParams) {
    this._$http = $http;
    this._ProductsService = ProductsService;
    ProductsService.get($stateParams.id)
    .then ((response) => {
      console.log(response);
      this.product = response.data.result;
    });
  }
}

export default ProductController
