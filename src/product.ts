export function ProductComponent(name, price) {
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
};
