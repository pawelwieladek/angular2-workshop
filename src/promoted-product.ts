import { ProductComponent } from './product';

export function PromotedProductComponent(name, price) {
  ProductComponent.call(this, name, price);
}

PromotedProductComponent.prototype = Object.create(ProductComponent.prototype);
PromotedProductComponent.prototype.constructor = ProductComponent;

PromotedProductComponent.prototype.createDOMElement = function() {
  var componentElement = ProductComponent.prototype.createDOMElement.call(this);
  componentElement.className += ' promoted';
  return componentElement;
};
