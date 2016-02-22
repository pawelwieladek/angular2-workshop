import { ProductsListComponent } from './product-list';
import { PromotedProductComponent } from './promoted-product';
import { ProductComponent } from './product';
import { ListingComponent } from './listing';

let regularProducts = new ProductsListComponent([
  new ProductComponent('iPhone', 2400),
  new ProductComponent('Samsung Galaxy S6', 3600)
]);

let promotedProducts = new ProductsListComponent([
  new PromotedProductComponent('Sony Z2', 1200),
  new PromotedProductComponent('Sony Z5', 3000)
]);

let listing = new ListingComponent(promotedProducts, regularProducts);

document.body.appendChild(listing.createDOMElement());
