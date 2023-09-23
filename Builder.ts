class ExpressDeliveryBuilder implements IDeliveryBuilder {
    private _order: Order;

    constructor(products: Product[], customer: Customer) {
        this._order = new Order();
        this._order.Products = products;
        this._order.Customer = customer;
    }

    BuildDeliveryMethod(): IDeliveryBuilder {
        this._order.DeliveryMethod = "Express";
        return this;
    }

    BuildOrderDate(): IDeliveryBuilder {
        this._order.OrderDate = new Date();
        return this;
    }

    BuildDeliveryDate(): IDeliveryBuilder {
        // Розрахунок кількості днів доставки залежно від адреси
        this._order.DeliveryDate = new Date();
        this._order.DeliveryDate.setDate(this._order.DeliveryDate.getDate() + 2); // Наприклад, +2 дні для експрес доставки
        return this;
    }

    BuildDeliveryCost(): IDeliveryBuilder {
        // Розрахунок доставки залежно від адреси
        this._order.DeliveryCost = 100 * 2; 
        return this;
    }

    BuildOrderTotalCost(): IDeliveryBuilder {
        this._order.OrderTotalCost = this._order.Products.reduce(
            (total, product) => total + product.Quantity * product.Price,
            0
        );
        return this;
    }

    GetOrder(): Order {
        const order = this._order;
        this._order = new Order();
        return order;
    }
}

interface IDeliveryBuilder {
    BuildDeliveryMethod(): IDeliveryBuilder;
    BuildOrderDate(): IDeliveryBuilder;
    BuildDeliveryDate(): IDeliveryBuilder;
    BuildDeliveryCost(): IDeliveryBuilder;
    BuildOrderTotalCost(): IDeliveryBuilder;
    GetOrder(): Order;
}

class StandardDeliveryBuilder implements IDeliveryBuilder {
    private _order: Order;

    constructor(products: Product[], customer: Customer) {
        this._order = new Order();
        this._order.Customer = customer;
        this._order.Products = products;
    }

    BuildDeliveryMethod(): IDeliveryBuilder {
        this._order.DeliveryMethod = "Standard";
        return this;
    }

    BuildOrderDate(): IDeliveryBuilder {
        this._order.OrderDate = new Date();
        return this;
    }

    BuildDeliveryDate(): IDeliveryBuilder {
        // Розрахунок кількості днів доставки залежно від адреси
        this._order.DeliveryDate = new Date();
        this._order.DeliveryDate.setDate(this._order.DeliveryDate.getDate() + 5); // Наприклад, +5 днів для стандартної доставки
        return this;
    }

    BuildDeliveryCost(): IDeliveryBuilder {
        // Розрахунок доставки залежно від адреси
        this._order.DeliveryCost = 100;
        return this;
    }

    BuildOrderTotalCost(): IDeliveryBuilder {
        this._order.OrderTotalCost = this._order.Products.reduce(
            (total, product) => total + product.Quantity * product.Price,
            0
        );
        return this;
    }

    GetOrder(): Order {
        const order = this._order;
        this._order = new Order();
        return order;
    }
}

class Customer {
    public CustomerName: string;
    public CustomerPhoneNumber: string;
    public ShippingAddress: string;

    constructor(name: string, phoneNumber: string, address: string) {
        this.CustomerName = name;
        this.CustomerPhoneNumber = phoneNumber;
        this.ShippingAddress = address;
    }

    toString(): string {
        return `Customer: ${this.CustomerName}, ${this.CustomerPhoneNumber}, ${this.ShippingAddress}\n`;
    }
}

class Order {
    public Products: Product[];
    public Customer: Customer;
    public DeliveryMethod: string;
    public OrderDate: Date;
    public DeliveryDate: Date;
    public DeliveryCost: number;
    public OrderTotalCost: number;

    toString(): string {
        let result = "--- Order details --- \n\n" + this.Customer.toString() + "\n\n";

        for (const item of this.Products) {
            result += item.toString();
        }

        result += `${this.DeliveryMethod} delivery\n` +
            `Order date: ${this.OrderDate} \nDelivery date: ${this.DeliveryDate}\n\n` +
            `Order cost: ${this.OrderTotalCost} \nDelivery cost: ${this.DeliveryCost}\n\n\n`;

        return result;
    }
}

class Product {
    public Name: string;
    public Price: number;
    public Quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this.Name = name;
        this.Price = price;
        this.Quantity = quantity;
    }

    toString(): string {
        return `  ${this.Name}  |  ${this.Price}$  |  ${this.Quantity} \n`;
    }
}

class DeliveryDirector {
    private _builder: IDeliveryBuilder;

    constructor(builder: IDeliveryBuilder) {
        this._builder = builder;
    }

    ConstructOrder(): void {
        this._builder
            .BuildDeliveryMethod()
            .BuildOrderDate()
            .BuildDeliveryDate()
            .BuildDeliveryCost()
            .BuildOrderTotalCost();
    }
}

const products: Product[] = [
    new Product("Milk", 10, 1),
    new Product("Meat", 10, 2),
    new Product("Water", 10, 1),
];

const customer: Customer = new Customer("Alina", "0999999999", "Golovna 2");

const standardBuilder: IDeliveryBuilder = new StandardDeliveryBuilder(products, customer);
const standardDirector: DeliveryDirector = new DeliveryDirector(standardBuilder);
standardDirector.ConstructOrder();
const standardOrder: Order = standardBuilder.GetOrder();
console.log(standardOrder.toString());

const expressBuilder: IDeliveryBuilder = new ExpressDeliveryBuilder(products, customer);
const expressDirector: DeliveryDirector = new DeliveryDirector(expressBuilder);
expressDirector.ConstructOrder();
const expressOrder: Order = expressBuilder.GetOrder();
console.log(expressOrder.toString());