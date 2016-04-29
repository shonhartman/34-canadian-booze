class ProductsService {
  constructor($http) {
    this.products = [];
    this.key = 'MDo5YTdkMWJkOC0wY2FhLTExZTYtOGMwZC1jYjlkMDJjMjQ4NWM6YVVhR2dBUXo0QjFMWU5lZGRUbWtxSmwwQmNhbVlHOXhVMWVP';
    this._$http = $http;
  }

  all() {
    return this._$http
    .get(`https://lcboapi.com/products?access_key=${this.key}`)

  }

  get(id) {
    return this._$http
    .get(`https://lcboapi.com/products/${id}?access_key=${this.key}`)
  }

  search(find) {
    return this._$http
    .get(`https://lcboapi.com/products?q=${find}&access_key=${this.key}`)


  }
}

export default ProductsService;
