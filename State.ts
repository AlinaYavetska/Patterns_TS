interface IDeliveryState {
    processDelivery(context: ProductDelivery): void;
}

class InTransitState implements IDeliveryState {
    processDelivery(context: ProductDelivery): void {
        console.log(`Product ${context.productName} is in transit.`);
        context.deliveryState = new DeliveredState();
    }
}

class DeliveredState implements IDeliveryState {
    processDelivery(context: ProductDelivery): void {
        console.log(`Product ${context.productName} has been delivered.`);
    }
}

class ProductDelivery {
    productName: string;
    deliveryState: IDeliveryState;

    constructor(productName: string) {
        this.productName = productName;
        this.deliveryState = new InTransitState();
    }

    processDelivery(): void {
        this.deliveryState.processDelivery(this);
    }
}

const laptopDelivery = new ProductDelivery("Laptop");

laptopDelivery.processDelivery();

laptopDelivery.processDelivery();