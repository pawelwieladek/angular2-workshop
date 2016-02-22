function ProductComponent(name, price) {
  this.name = name;
  this.price = price;
}

ProductComponent.prototype.createDOMElement = function() {
  var componentElement = document.createElement('div');
  var nameElement = document.createElement('div');
  var priceElement = document.createElement('div');

  componentElement.className = 'product';

  nameElement.textContent = `Product: ${this.name}`;
  nameElement.className = 'product-name';

  priceElement.textContent = `Price: ${this.price} PLN`;
  priceElement.className = 'product-price';

  componentElement.appendChild(nameElement);
  componentElement.appendChild(priceElement);

  return componentElement;
}

function PromotedProductComponent(name, price) {
  ProductComponent.call(this, name, price);
}

PromotedProductComponent.prototype = Object.create(ProductComponent.prototype);
PromotedProductComponent.prototype.constructor = ProductComponent;

PromotedProductComponent.prototype.createDOMElement = function() {
  var componentElement = ProductComponent.prototype.createDOMElement.call(this);
  componentElement.className += ' promoted';
  return componentElement;
}

function ProductsListComponent(productComponents) {
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

var productsList = new ProductsListComponent([
  new PromotedProductComponent('Sony Z2', 1200),
  new ProductComponent('iPhone', 2400),
  new ProductComponent('Samsung S6', 3600)
]);
document.body.appendChild(productsList.createDOMElement());
