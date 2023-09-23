var ExpressDeliveryBuilder = /** @class */ (function () {
    function ExpressDeliveryBuilder(products, customer) {
        this._order = new Order();
        this._order.Products = products;
        this._order.Customer = customer;
    }
    ExpressDeliveryBuilder.prototype.BuildDeliveryMethod = function () {
        this._order.DeliveryMethod = "Express";
        return this;
    };
    ExpressDeliveryBuilder.prototype.BuildOrderDate = function () {
        this._order.OrderDate = new Date();
        return this;
    };
    ExpressDeliveryBuilder.prototype.BuildDeliveryDate = function () {
        // Розрахунок кількості днів доставки залежно від адреси
        this._order.DeliveryDate = new Date();
        this._order.DeliveryDate.setDate(this._order.DeliveryDate.getDate() + 2); // Наприклад, +2 дні для експрес доставки
        return this;
    };
    ExpressDeliveryBuilder.prototype.BuildDeliveryCost = function () {
        // Розрахунок доставки залежно від адреси
        this._order.DeliveryCost = 100 * 2;
        return this;
    };
    ExpressDeliveryBuilder.prototype.BuildOrderTotalCost = function () {
        this._order.OrderTotalCost = this._order.Products.reduce(function (total, product) { return total + product.Quantity * product.Price; }, 0);
        return this;
    };
    ExpressDeliveryBuilder.prototype.GetOrder = function () {
        var order = this._order;
        this._order = new Order();
        return order;
    };
    return ExpressDeliveryBuilder;
}());
var StandardDeliveryBuilder = /** @class */ (function () {
    function StandardDeliveryBuilder(products, customer) {
        this._order = new Order();
        this._order.Customer = customer;
        this._order.Products = products;
    }
    StandardDeliveryBuilder.prototype.BuildDeliveryMethod = function () {
        this._order.DeliveryMethod = "Standard";
        return this;
    };
    StandardDeliveryBuilder.prototype.BuildOrderDate = function () {
        this._order.OrderDate = new Date();
        return this;
    };
    StandardDeliveryBuilder.prototype.BuildDeliveryDate = function () {
        // Розрахунок кількості днів доставки залежно від адреси
        this._order.DeliveryDate = new Date();
        this._order.DeliveryDate.setDate(this._order.DeliveryDate.getDate() + 5); // Наприклад, +5 днів для стандартної доставки
        return this;
    };
    StandardDeliveryBuilder.prototype.BuildDeliveryCost = function () {
        // Розрахунок доставки залежно від адреси
        this._order.DeliveryCost = 100;
        return this;
    };
    StandardDeliveryBuilder.prototype.BuildOrderTotalCost = function () {
        this._order.OrderTotalCost = this._order.Products.reduce(function (total, product) { return total + product.Quantity * product.Price; }, 0);
        return this;
    };
    StandardDeliveryBuilder.prototype.GetOrder = function () {
        var order = this._order;
        this._order = new Order();
        return order;
    };
    return StandardDeliveryBuilder;
}());
var Customer = /** @class */ (function () {
    function Customer(name, phoneNumber, address) {
        this.CustomerName = name;
        this.CustomerPhoneNumber = phoneNumber;
        this.ShippingAddress = address;
    }
    Customer.prototype.toString = function () {
        return "Customer: ".concat(this.CustomerName, ", ").concat(this.CustomerPhoneNumber, ", ").concat(this.ShippingAddress, "\n");
    };
    return Customer;
}());
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.toString = function () {
        var result = "--- Order details --- \n\n" + this.Customer.toString() + "\n\n";
        for (var _i = 0, _a = this.Products; _i < _a.length; _i++) {
            var item = _a[_i];
            result += item.toString();
        }
        result += "".concat(this.DeliveryMethod, " delivery\n") +
            "Order date: ".concat(this.OrderDate, " \nDelivery date: ").concat(this.DeliveryDate, "\n\n") +
            "Order cost: ".concat(this.OrderTotalCost, " \nDelivery cost: ").concat(this.DeliveryCost, "\n\n\n");
        return result;
    };
    return Order;
}());
var Product = /** @class */ (function () {
    function Product(name, price, quantity) {
        this.Name = name;
        this.Price = price;
        this.Quantity = quantity;
    }
    Product.prototype.toString = function () {
        return "  ".concat(this.Name, "  |  ").concat(this.Price, "$  |  ").concat(this.Quantity, " \n");
    };
    return Product;
}());
var DeliveryDirector = /** @class */ (function () {
    function DeliveryDirector(builder) {
        this._builder = builder;
    }
    DeliveryDirector.prototype.ConstructOrder = function () {
        this._builder
            .BuildDeliveryMethod()
            .BuildOrderDate()
            .BuildDeliveryDate()
            .BuildDeliveryCost()
            .BuildOrderTotalCost();
    };
    return DeliveryDirector;
}());
var products = [
    new Product("Milk", 10, 1),
    new Product("Meat", 10, 2),
    new Product("Water", 10, 1),
];
var customer = new Customer("Alina", "0999999999", "Golovna 2");
var standardBuilder = new StandardDeliveryBuilder(products, customer);
var standardDirector = new DeliveryDirector(standardBuilder);
standardDirector.ConstructOrder();
var standardOrder = standardBuilder.GetOrder();
console.log(standardOrder.toString());
var expressBuilder = new ExpressDeliveryBuilder(products, customer);
var expressDirector = new DeliveryDirector(expressBuilder);
expressDirector.ConstructOrder();
var expressOrder = expressBuilder.GetOrder();
console.log(expressOrder.toString());
