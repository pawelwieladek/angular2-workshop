export function ProductsListComponent(productComponents) {
  this.productComponents = productComponents;
}

ProductsListComponent.prototype.createDOMElement = function() {
  var listElement = document.createElement('div');

  listElement.className = 'products-list';

  this.productComponents.forEach(function(productComponent) {
    listElement.appendChild(productComponent.createDOMElement());
  });

  return listElement;
};