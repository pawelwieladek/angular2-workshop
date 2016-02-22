System.register(['./product-list', './promoted-product', './product', './listing'], function(exports_1) {
    var product_list_1, promoted_product_1, product_1, listing_1;
    var regularProducts, promotedProducts, listing;
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
            },
            function (listing_1_1) {
                listing_1 = listing_1_1;
            }],
        execute: function() {
            regularProducts = new product_list_1.ProductsListComponent([
                new product_1.ProductComponent('iPhone', 2400),
                new product_1.ProductComponent('Samsung Galaxy S6', 3600)
            ]);
            promotedProducts = new product_list_1.ProductsListComponent([
                new promoted_product_1.PromotedProductComponent('Sony Z2', 1200),
                new promoted_product_1.PromotedProductComponent('Sony Z5', 3000)
            ]);
            listing = new listing_1.ListingComponent(promotedProducts, regularProducts);
            document.body.appendChild(listing.createDOMElement());
        }
    }
});
//# sourceMappingURL=main.js.map