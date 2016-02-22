System.register([], function(exports_1) {
    var ProductsListComponent;
    return {
        setters:[],
        execute: function() {
            ProductsListComponent = (function () {
                function ProductsListComponent(productComponents) {
                    this.productComponents = productComponents;
                }
                ProductsListComponent.prototype.createDOMElement = function () {
                    var listElement = document.createElement('div');
                    listElement.className = 'list-group';
                    this.productComponents.forEach(function (productComponent) {
                        var element = productComponent.createDOMElement();
                        element.className += ' list-group-item';
                        listElement.appendChild(element);
                    });
                    return listElement;
                };
                return ProductsListComponent;
            })();
            exports_1("ProductsListComponent", ProductsListComponent);
        }
    }
});
//# sourceMappingURL=product-list.js.map