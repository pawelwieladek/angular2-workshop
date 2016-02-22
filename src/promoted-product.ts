function deprecated() {
    return function() {
        if (arguments.length === 3) {
            let [ target, propertyKey, value ] = Array.prototype.slice.call(arguments);
            return {
                value: function (...args: any[]) {
                    console.warn(`Method ${propertyKey} is deprecated`);
                    return value.value.apply(this, args);
                }
            };
        } else {
            console.warn(`Class is deprecated`);
        }
    };
}

import { ProductComponent } from './product';

@deprecated()
export class PromotedProductComponent extends ProductComponent {
    constructor(name: String, price: Number) {
        super(name, price);
    }

    @deprecated()
    createDOMElement() {
        let componentElement = super.createDOMElement();
        componentElement.className += ' list-group-item-success';
        return componentElement;
    }
}
