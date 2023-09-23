var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.toString = function () {
        return "".concat(this.name, ", ").concat(this.price, "$");
    };
    return Product;
}());
var Address = /** @class */ (function () {
    function Address(region, city, street, houseNumber) {
        this.region = region;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
    }
    Address.prototype.toString = function () {
        return "".concat(this.region, " region, ").concat(this.city, ", ").concat(this.street, " ").concat(this.houseNumber);
    };
    return Address;
}());
var DeliverySystem = /** @class */ (function () {
    function DeliverySystem() {
    }
    DeliverySystem.getInstance = function () {
        if (!DeliverySystem.instance) {
            DeliverySystem.instance = new DeliverySystem();
        }
        return DeliverySystem.instance;
    };
    DeliverySystem.prototype.deliverProduct = function (product, address) {
        console.log("Delivery of '".concat(product, "' to ").concat(address));
    };
    DeliverySystem.instance = null;
    return DeliverySystem;
}());
var laptop = new Product("Milk", 5);
var smartphone = new Product("Water", 2);
var address1 = new Address("Chernivtsi", "Chernivtsi", "Holovna", "2A");
var address2 = new Address("Chernivtsi", "Chernivtsi", "Holovna", "260");
var deliverySystem = DeliverySystem.getInstance();
deliverySystem.deliverProduct(laptop, address1);
deliverySystem.deliverProduct(smartphone, address2);
