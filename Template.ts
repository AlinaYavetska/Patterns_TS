abstract class DeliveryTemplate {
    deliverProduct(product: string): void {
        this.selectDeliveryMethod();

        this.prepareProduct(product);

        this.handOverToDeliveryService();

        this.completeDelivery();
    }

    protected abstract selectDeliveryMethod(): void;

    protected abstract prepareProduct(product: string): void;

    private handOverToDeliveryService(): void {
        console.log("Handing over the product to the delivery service.");
    }

    private completeDelivery(): void {
        console.log("Delivery completed successfully.");
    }
}

class PostalDelivery extends DeliveryTemplate {
    protected selectDeliveryMethod(): void {
        console.log("Selected delivery method: Postal Delivery");
    }

    protected prepareProduct(product: string): void {
        console.log(`Preparing ${product} for postal delivery.`);
    }
}

class CourierDelivery extends DeliveryTemplate {
    protected selectDeliveryMethod(): void {
        console.log("Selected delivery method: Courier Delivery");
    }

    protected prepareProduct(product: string): void {
        console.log(`Preparing ${product} for courier delivery.`);
    }
}

console.log("Postal Delivery Process:");
const postalDelivery = new PostalDelivery();
postalDelivery.deliverProduct("Laptop");

console.log("\nCourier Delivery Process:");
const courierDelivery = new CourierDelivery();
courierDelivery.deliverProduct("Smartphone");