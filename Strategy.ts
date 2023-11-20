interface IDeliveryStrategy {
    deliver(product: string): void;
}

class PostalDeliveryStrategy implements IDeliveryStrategy {
    deliver(product: string): void {
        console.log(`Delivering ${product} by postal service.`);
    }
}

class CourierDeliveryStrategy implements IDeliveryStrategy {
    deliver(product: string): void {
        console.log(`Delivering ${product} by courier.`);
    }
}

class ProductDelivery {
    private deliveryStrategy: IDeliveryStrategy;

    constructor(strategy: IDeliveryStrategy) {
        this.deliveryStrategy = strategy;
    }

    setDeliveryStrategy(strategy: IDeliveryStrategy): void {
        this.deliveryStrategy = strategy;
    }

    processDelivery(product: string): void {
        this.deliveryStrategy.deliver(product);
    }
}

const postalDelivery = new ProductDelivery(new PostalDeliveryStrategy());
postalDelivery.processDelivery("Laptop");

postalDelivery.setDeliveryStrategy(new CourierDeliveryStrategy());
postalDelivery.processDelivery("Smartphone");