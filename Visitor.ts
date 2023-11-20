interface IDeliveryVisitor {
    visit(productDelivery: ProductDelivery): void;
}

class ProductDelivery {
    productName: string;
    weight: number;

    constructor(productName: string, weight: number) {
        this.productName = productName;
        this.weight = weight;
    }

    accept(visitor: IDeliveryVisitor): void {
        visitor.visit(this);
    }
}

class DeliveryCostVisitor implements IDeliveryVisitor {
    visit(productDelivery: ProductDelivery): void {
        const deliveryCost: number = productDelivery.weight * 0.5;
        console.log(`Delivery cost for ${productDelivery.productName}: $${deliveryCost}`);
    }
}

class DeliveryPreparationVisitor implements IDeliveryVisitor {
    visit(productDelivery: ProductDelivery): void {
        console.log(`Preparing ${productDelivery.productName} for delivery.`);
    }
}

class DeliveryBatch {
    private deliveries: ProductDelivery[] = [];

    addDelivery(delivery: ProductDelivery): void {
        this.deliveries.push(delivery);
    }

    accept(visitor: IDeliveryVisitor): void {
        this.deliveries.forEach(delivery => delivery.accept(visitor));
    }
}

console.log("Postal Delivery Process:");

const laptopDelivery = new ProductDelivery("Laptop", 2.5);
const smartphoneDelivery = new ProductDelivery("Smartphone", 0.5);

const deliveryBatch = new DeliveryBatch();
deliveryBatch.addDelivery(laptopDelivery);
deliveryBatch.addDelivery(smartphoneDelivery);

const costVisitor = new DeliveryCostVisitor();
deliveryBatch.accept(costVisitor);

const preparationVisitor = new DeliveryPreparationVisitor();
deliveryBatch.accept(preparationVisitor);