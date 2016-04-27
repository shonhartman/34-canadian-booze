function config($stateProvider) {
  $stateProvider
  .state("products", {
    url: "/",
    controller: "productsController as productsCtrl",
    template: require('./views/products.html')
  })
  .state("product", {
    url: "/product/:id",
    controller: "productController as productCtrl",
    template: require('./views/product.html')
  });
}

export default config;
