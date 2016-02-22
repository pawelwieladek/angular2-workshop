System.register(['./product-list', './promoted-product', './product'], function(exports_1) {
    var product_list_1, promoted_product_1, product_1;
    var productsList;
    return {
        setters:[
            function (product_list_1_1) {
                product_list_1 = product_list_1_1;
            },
            function (promoted_product_1_1) {
                promoted_product_1 = promoted_product_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            productsList = new product_list_1.ProductsListComponent([
                new promoted_product_1.PromotedProductComponent('Sony Z2', 1200),
                new product_1.ProductComponent('iPhone', 2400),
                new product_1.ProductComponent('Samsung Galaxy S6', 3600)
            ]);
            document.body.appendChild(productsList.createDOMElement());
        }
    }
});
//# sourceMappingURL=main.js.map