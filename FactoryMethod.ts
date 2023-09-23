class Product2 {
    constructor(public name: string, public price: number) { }

    toString(): string {
        return `${this.name}, ${this.price}$`;
    }
}

class Address2 {
    constructor(public region: string, public city: string, public street: string, public houseNumber: string) { }

    toString(): string {
        return `${this.region} region, ${this.city}, ${this.street} ${this.houseNumber}`;
    }
}

interface IDelivery {
    product: Product2;
    address: Address2;
    deliver(): void;
}

class StandardDelivery implements IDelivery {
    constructor(public product: Product2, public address: Address2) { }

    deliver(): void {
        console.log(`Standard delivery of ${this.product.toString()} to ${this.address.toString()}`);
    }
}

class PickupDelivery implements IDelivery {
    constructor(public product: Product2, public address: Address2) { }

    deliver(): void {
        console.log(`Pick-up delivery of ${this.product.toString()} to ${this.address.toString()}`);
    }
}

class ExpressDelivery implements IDelivery {
    constructor(public product: Product2, public address: Address2) { }

    deliver(): void {
        console.log(`Express delivery of ${this.product.toString()} to ${this.address.toString()}`);
    }
}

abstract class DeliveryFactory {
    abstract getDelivery(): IDelivery;
    executeDelivery(): void {
        const delivery = this.getDelivery();
        delivery.deliver();
    }
}

class StandardDeliveryFactory extends DeliveryFactory {
    constructor(private product: Product2, private address: Address2) {
        super();
    }

    getDelivery(): IDelivery {
        return new StandardDelivery(this.product, this.address);
    }
}

class PickupDeliveryFactory extends DeliveryFactory {
    constructor(private product: Product2, private address: Address2) {
        super();
    }

    getDelivery(): IDelivery {
        return new PickupDelivery(this.product, this.address);
    }
}

class ExpressDeliveryFactory extends DeliveryFactory {
    constructor(private product: Product2, private address: Address2) {
        super();
    }

    getDelivery(): IDelivery {
        return new ExpressDelivery(this.product, this.address);
    }
}

function getFactory(deliveryType: string, product: Product2, address: Address2): DeliveryFactory | null {
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


const product: Product2 = new Product2('Milk', 5);
const address: Address2 = new Address2('Chernivtsi', 'Chernivtsi', 'Holovna', '2A');
const factory: DeliveryFactory | null = getFactory("p", product, address); // e s p

if (factory) {
    // const delivery: IDelivery = factory.getDelivery();
    console.log('\n> Delivery you\'ve just created: \n');
    factory.executeDelivery();
    // delivery.deliver();
} else {
    console.log('Invalid delivery type.');
}