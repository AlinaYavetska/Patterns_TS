var ForeignProduct = /** @class */ (function () {
    function ForeignProduct() {
    }
    ForeignProduct.prototype.ship = function () {
        console.log("Foreign product");
    };
    return ForeignProduct;
}());
var UkrainianProduct = /** @class */ (function () {
    function UkrainianProduct() {
    }
    UkrainianProduct.prototype.ship = function () {
        console.log("Ukrainian product");
    };
    return UkrainianProduct;
}());
var ForeignDelivery = /** @class */ (function () {
    function ForeignDelivery() {
    }
    ForeignDelivery.prototype.deliver = function (product) {
        product.ship();
        console.log("Foreign delivery");
        console.log("*********************");
    };
    return ForeignDelivery;
}());
var UkrainianDelivery = /** @class */ (function () {
    function UkrainianDelivery() {
    }
    UkrainianDelivery.prototype.deliver = function (product) {
        product.ship();
        console.log("Ukrainian delivery");
        console.log("*********************");
    };
    return UkrainianDelivery;
}());
var ForeignFactory = /** @class */ (function () {
    function ForeignFactory() {
    }
    ForeignFactory.prototype.createProduct = function () {
        return new ForeignProduct();
    };
    ForeignFactory.prototype.createDeliveryMethod = function () {
        return new ForeignDelivery();
    };
    return ForeignFactory;
}());
var UkrainianFactory = /** @class */ (function () {
    function UkrainianFactory() {
    }
    UkrainianFactory.prototype.createProduct = function () {
        return new UkrainianProduct();
    };
    UkrainianFactory.prototype.createDeliveryMethod = function () {
        return new UkrainianDelivery();
    };
    return UkrainianFactory;
}());
var foreignFactory = new ForeignFactory();
var foreignProduct = foreignFactory.createProduct();
var foreignDeliveryMethod = foreignFactory.createDeliveryMethod();
foreignDeliveryMethod.deliver(foreignProduct);
var ukrainianFactory = new UkrainianFactory();
var ukrainianProduct = ukrainianFactory.createProduct();
var ukrainianDeliveryMethod = ukrainianFactory.createDeliveryMethod();
ukrainianDeliveryMethod.deliver(ukrainianProduct);
foreignDeliveryMethod.deliver(ukrainianProduct);
ukrainianDeliveryMethod.deliver(foreignProduct);
