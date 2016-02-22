export class ProductComponent {
  private name: String;
  private price: Number;

  constructor(name: String, price: Number) {
    this.name = name;
    this.price = price;
  }

  createDOMElement() {
    let componentElement = document.createElement('div');
    let nameElement = document.createElement('div');
    let priceElement = document.createElement('div');

    componentElement.className = 'product';

    nameElement.textContent = `Product: ${this.name}`;
    nameElement.className = 'product-name';

    priceElement.textContent = `Price: ${this.price} PLN`;
    priceElement.className = 'product-price';

    componentElement.appendChild(nameElement);
    componentElement.appendChild(priceElement);

    return componentElement;
  }
}
