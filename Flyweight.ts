interface IProduct {
    deliver(destination: string): void;
}

class ConcreteProduct implements IProduct {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    deliver(destination: string) {
        console.log(`Delivery of '${this.name}'. Address: ${destination}`);
    }
}

class ProductFactory {
    private products: { [name: string]: IProduct } = {};

    getProduct(name: string): IProduct {
        if (!this.products[name]) {
            this.products[name] = new ConcreteProduct(name);
            console.log(`Product was added to cache`)
        }
        else {
            console.log(`Product was taken from cache`)
        }
        return this.products[name];
    }
}

class Order {
    private product: IProduct;
    private destination: string;

    constructor(product: IProduct, destination: string) {
        this.product = product;
        this.destination = destination;
    }

    processOrder() {
        this.product.deliver(this.destination);
    }
}

const factory = new ProductFactory();

const product1 = factory.getProduct("Product 1");
const product2 = factory.getProduct("Product 2");
const product3 = factory.getProduct("Product 1");

const order1 = new Order(product1, "Адреса 1");
const order2 = new Order(product2, "Адреса 2");
const order3 = new Order(product3, "Адреса 3");

order1.processOrder();
order2.processOrder();
order3.processOrder();


