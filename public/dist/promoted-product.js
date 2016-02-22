System.register(['./product'], function(exports_1) {
    var product_1;
    function PromotedProductComponent(name, price) {
        product_1.ProductComponent.call(this, name, price);
    }
    exports_1("PromotedProductComponent", PromotedProductComponent);
    return {
        setters:[
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            PromotedProductComponent.prototype = Object.create(product_1.ProductComponent.prototype);
            PromotedProductComponent.prototype.constructor = product_1.ProductComponent;
            PromotedProductComponent.prototype.createDOMElement = function () {
                var componentElement = product_1.ProductComponent.prototype.createDOMElement.call(this);
                componentElement.className += ' promoted';
                return componentElement;
            };
        }
    }
});
//# sourceMappingURL=promoted-product.js.map