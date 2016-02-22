function ProductComponent(props) {
  this.name = props.name;
  this.price = props.price;
  this.isPromoted = props.isPromoted;
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

  if (this.isPromoted) {
    componentElement.className += ' promoted';
  }

  componentElement.appendChild(nameElement);
  componentElement.appendChild(priceElement);

  return componentElement;
}

function ProductsListComponent(productsList) {
  this.productsList = productsList;
}

ProductsListComponent.prototype.createDOMElement = function() {
  var listElement = document.createElement('div');

  listElement.className = 'products-list';

  this.productsList.forEach(function(product) {
    var productElement = new ProductComponent(product);
    listElement.appendChild(productElement.createDOMElement());
  });

  return listElement;
};

var productsList = new ProductsListComponent([
  { name: 'Sony Z2', price: 1200, isPromoted: true },
  { name: 'iPhone', price: 3600 },
  { name: 'Samsung S6', price: 2400 }
]);
document.body.appendChild(productsList.createDOMElement());
