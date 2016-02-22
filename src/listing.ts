import { ProductsListComponent } from './product-list';

export class ListingComponent {
  private promotedProducts: ProductsListComponent;
  private regularProducts: ProductsListComponent;
  private promotedVisible: Boolean;

  constructor(promotedProducts: ProductsListComponent, regularProducts: ProductsListComponent) {
    this.promotedProducts = promotedProducts;
    this.regularProducts = regularProducts;
    this.promotedVisible = true;
  }

  createDOMElement() {
    let componentElement = document.createElement('div');
    let promotedProductsElement = document.createElement('div');
    let regularProductsElement = document.createElement('div');
    let buttons = document.createElement('div');
    let hidePromotedElement = document.createElement('button');

    promotedProductsElement.appendChild(this.promotedProducts.createDOMElement());
    regularProductsElement.appendChild(this.regularProducts.createDOMElement());

    buttons.className = 'well';

    hidePromotedElement.className = 'btn btn-primary';
    hidePromotedElement.innerText = 'Hide promoted products';

    hidePromotedElement.addEventListener('click', () => {
      if (this.promotedVisible) {
        componentElement.removeChild(promotedProductsElement);
        hidePromotedElement.innerText = 'Show promoted products';
      } else {
        componentElement.insertBefore(promotedProductsElement, regularProductsElement);
        hidePromotedElement.innerText = 'Hide promoted products';
      }
      this.promotedVisible = !this.promotedVisible;
    });

    buttons.appendChild(hidePromotedElement);

    componentElement.appendChild(buttons);
    componentElement.appendChild(promotedProductsElement);
    componentElement.appendChild(regularProductsElement);

    return componentElement;
  }
}
