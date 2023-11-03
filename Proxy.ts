interface IDeliveryService {
    DeliverProduct(product: string, destination: string): void;
}

class RealDeliveryService implements IDeliveryService {
    DeliverProduct(product: string, destination: string): void {
        console.log(`Delivery of '${product}'. Address: ${destination}`);
    }
}

class DeliveryServiceProxy implements IDeliveryService {
    private realService: RealDeliveryService = new RealDeliveryService();

    DeliverProduct(product: string, destination: string): void {
        // there may be some logic

        this.realService.DeliverProduct(product, destination);

        // there also may be some logic
    }
}

const deliveryService: IDeliveryService = new DeliveryServiceProxy();

deliveryService.DeliverProduct("Product1", "Address1");
deliveryService.DeliverProduct("Product2", "Address2");