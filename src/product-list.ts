import { ProductComponent } from './product';

export class ProductsListComponent {
  private productComponents: Array<ProductComponent>;

  constructor(productComponents: Array<ProductComponent>) {
    this.productComponents = productComponents;
  }

  createDOMElement() {
      let listElement = document.createElement('div');

      listElement.className = 'list-group';

      this.productComponents.forEach(function(productComponent) {
          let element = productComponent.createDOMElement();
          element.className += ' list-group-item';
          listElement.appendChild(element);
      });

      return listElement;
  }
}