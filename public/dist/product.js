System.register([], function(exports_1) {
    function ProductComponent(name, price) {
        this.name = name;
        this.price = price;
    }
    exports_1("ProductComponent", ProductComponent);
    return {
        setters:[],
        execute: function() {
            ProductComponent.prototype.createDOMElement = function () {
                var componentElement = document.createElement('div');
                var nameElement = document.createElement('div');
                var priceElement = document.createElement('div');
                componentElement.className = 'product';
                nameElement.textContent = "Product: " + this.name;
                nameElement.className = 'product-name';
                priceElement.textContent = "Price: " + this.price + " PLN";
                priceElement.className = 'product-price';
                componentElement.appendChild(nameElement);
                componentElement.appendChild(priceElement);
                return componentElement;
            };
        }
    }
});
//# sourceMappingURL=product.js.map