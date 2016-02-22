System.register(['./product'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var product_1;
    var PromotedProductComponent;
    function deprecated() {
        return function () {
            if (arguments.length === 3) {
                var _a = Array.prototype.slice.call(arguments), target = _a[0], propertyKey = _a[1], value = _a[2];
                return {
                    value: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i - 0] = arguments[_i];
                        }
                        console.warn("Method " + propertyKey + " is deprecated");
                        return value.value.apply(this, args);
                    }
                };
            }
            else {
                console.warn("Class is deprecated");
            }
        };
    }
    return {
        setters:[
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            PromotedProductComponent = (function (_super) {
                __extends(PromotedProductComponent, _super);
                function PromotedProductComponent(name, price) {
                    _super.call(this, name, price);
                }
                PromotedProductComponent.prototype.createDOMElement = function () {
                    var componentElement = _super.prototype.createDOMElement.call(this);
                    componentElement.className += ' list-group-item-success';
                    return componentElement;
                };
                Object.defineProperty(PromotedProductComponent.prototype, "createDOMElement",
                    __decorate([
                        deprecated()
                    ], PromotedProductComponent.prototype, "createDOMElement", Object.getOwnPropertyDescriptor(PromotedProductComponent.prototype, "createDOMElement")));
                PromotedProductComponent = __decorate([
                    deprecated()
                ], PromotedProductComponent);
                return PromotedProductComponent;
            })(product_1.ProductComponent);
            exports_1("PromotedProductComponent", PromotedProductComponent);
        }
    }
});
//# sourceMappingURL=promoted-product.js.map