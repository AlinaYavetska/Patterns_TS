var Product1 = /** @class */ (function () {
    function Product1(name, price) {
        this.name = name;
        this.price = price;
    }
    Product1.prototype.clone = function () {
        return new Product1(this.name, this.price);
    };
    Product1.prototype.toString = function () {
        return "".concat(this.name, " ").concat(this.price, "$");
    };
    return Product1;
}());
var Address1 = /** @class */ (function () {
    function Address1(region, city, street, houseNumber) {
        this.region = region;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
    }
    Address1.prototype.clone = function () {
        return new Address1(this.region, this.city, this.street, this.houseNumber);
    };
    Address1.prototype.toString = function () {
        return "".concat(this.region, ", ").concat(this.city, ", ").concat(this.street, ", ").concat(this.houseNumber);
    };
    return Address1;
}());
var DeliverySystem1 = /** @class */ (function () {
    function DeliverySystem1() {
    }
    DeliverySystem1.prototype.deliver = function (product, address) {
        console.log("Delivery of '".concat(product, "' to ").concat(address));
    };
    return DeliverySystem1;
}());
var initialProduct = new Product1("Milk", 5);
var initialAddress = new Address1("Chernivtsi", "Chernivtsi", "Holovna", "2A");
var deliverySystem1 = new DeliverySystem1();
var clonedProduct = initialProduct.clone();
var clonedAddress = initialAddress.clone();
deliverySystem1.deliver(initialProduct, initialAddress);
initialProduct.price = 7;
initialAddress.street = "Gaidara";
deliverySystem1.deliver(clonedProduct, clonedAddress);
clonedProduct.name = "Meat";
clonedAddress.city = "Khotyn";
deliverySystem1.deliver(initialProduct, initialAddress);
deliverySystem1.deliver(clonedProduct, clonedAddress);
