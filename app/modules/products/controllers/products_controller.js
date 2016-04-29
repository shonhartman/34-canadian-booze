class ProductsController {
  constructor(ProductsService, $http) {
    this._$http = $http;
    this._ProductsService = ProductsService;
    ProductsService.all()
    .then ((response) => {
      this.products = response.data.result;
    });

    this.find = "";

  }

  search() {
    console.log(this.find);
    this._ProductsService.search(this.find)
    .then ((response) => {
      this.products = response.data.result;
    })
  }
}

export default ProductsController;
