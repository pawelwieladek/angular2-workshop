System.register([], function(exports_1) {
    function ProductsListComponent(productComponents) {
        this.productComponents = productComponents;
    }
    exports_1("ProductsListComponent", ProductsListComponent);
    return {
        setters:[],
        execute: function() {
            ProductsListComponent.prototype.createDOMElement = function () {
                var listElement = document.createElement('div');
                listElement.className = 'products-list';
                this.productComponents.forEach(function (productComponent) {
                    listElement.appendChild(productComponent.createDOMElement());
                });
                return listElement;
            };
        }
    }
});
//# sourceMappingURL=product-list.js.map