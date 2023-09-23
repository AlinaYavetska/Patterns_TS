var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product2 = /** @class */ (function () {
    function Product2(name, price) {
        this.name = name;
        this.price = price;
    }
    Product2.prototype.toString = function () {
        return "".concat(this.name, ", ").concat(this.price, "$");
    };
    return Product2;
}());
var Address2 = /** @class */ (function () {
    function Address2(region, city, street, houseNumber) {
        this.region = region;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
    }
    Address2.prototype.toString = function () {
        return "".concat(this.region, " region, ").concat(this.city, ", ").concat(this.street, " ").concat(this.houseNumber);
    };
    return Address2;
}());
var StandardDelivery = /** @class */ (function () {
    function StandardDelivery(product, address) {
        this.product = product;
        this.address = address;
    }
    StandardDelivery.prototype.deliver = function () {
        console.log("Standard delivery of ".concat(this.product.toString(), " to ").concat(this.address.toString()));
    };
    return StandardDelivery;
}());
var PickupDelivery = /** @class */ (function () {
    function PickupDelivery(product, address) {
        this.product = product;
        this.address = address;
    }
    PickupDelivery.prototype.deliver = function () {
        console.log("Pick-up delivery of ".concat(this.product.toString(), " to ").concat(this.address.toString()));
    };
    return PickupDelivery;
}());
var ExpressDelivery = /** @class */ (function () {
    function ExpressDelivery(product, address) {
        this.product = product;
        this.address = address;
    }
    ExpressDelivery.prototype.deliver = function () {
        console.log("Express delivery of ".concat(this.product.toString(), " to ").concat(this.address.toString()));
    };
    return ExpressDelivery;
}());
var DeliveryFactory = /** @class */ (function () {
    function DeliveryFactory() {
    }
    DeliveryFactory.prototype.executeDelivery = function () {
        var delivery = this.getDelivery();
        delivery.deliver();
    };
    return DeliveryFactory;
}());
var StandardDeliveryFactory = /** @class */ (function (_super) {
    __extends(StandardDeliveryFactory, _super);
    function StandardDeliveryFactory(product, address) {
        var _this = _super.call(this) || this;
        _this.product = product;
        _this.address = address;
        return _this;
    }
    StandardDeliveryFactory.prototype.getDelivery = function () {
        return new StandardDelivery(this.product, this.address);
    };
    return StandardDeliveryFactory;
}(DeliveryFactory));
var PickupDeliveryFactory = /** @class */ (function (_super) {
    __extends(PickupDeliveryFactory, _super);
    function PickupDeliveryFactory(product, address) {
        var _this = _super.call(this) || this;
        _this.product = product;
        _this.address = address;
        return _this;
    }
    PickupDeliveryFactory.prototype.getDelivery = function () {
        return new PickupDelivery(this.product, this.address);
    };
    return PickupDeliveryFactory;
}(DeliveryFactory));
var ExpressDeliveryFactory = /** @class */ (function (_super) {
    __extends(ExpressDeliveryFactory, _super);
    function ExpressDeliveryFactory(product, address) {
        var _this = _super.call(this) || this;
        _this.product = product;
        _this.address = address;
        return _this;
    }
    ExpressDeliveryFactory.prototype.getDelivery = function () {
        return new ExpressDelivery(this.product, this.address);
    };
    return ExpressDeliveryFactory;
}(DeliveryFactory));
function getFactory(deliveryType, product, address) {
    switch (deliveryType.toLowerCase()) {
        case 'e':
            return new ExpressDeliveryFactory(product, address);
        case 's':
            return new StandardDeliveryFactory(product, address);
        case 'p':
            return new PickupDeliveryFactory(product, address);
        default:
            return null;
    }
}
// console.log('> Enter the delivery type you would like to create:');
// console.log('> e - Express');
// console.log('> s - Standard');
// console.log('> p - Pick-up');
// const deliveryType: string = prompt('Enter your choice: ') || '';
var product = new Product2('Milk', 5);
var address = new Address2('Chernivtsi', 'Chernivtsi', 'Holovna', '2A');
var factory = getFactory("p", product, address);
if (factory) {
    // const delivery: IDelivery = factory.getDelivery();
    console.log('\n> Delivery you\'ve just created: \n');
    factory.executeDelivery();
    // delivery.deliver();
}
else {
    console.log('Invalid delivery type.');
}
