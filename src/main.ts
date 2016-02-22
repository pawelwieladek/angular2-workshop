import { ProductsListComponent } from './product-list';
import { PromotedProductComponent } from './promoted-product';
import { ProductComponent } from './product';

var productsList = new ProductsListComponent([
  new PromotedProductComponent('Sony Z2', 1200),
  new ProductComponent('iPhone', 2400),
  new ProductComponent('Samsung Galaxy S6', 3600)
]);

document.body.appendChild(productsList.createDOMElement());
