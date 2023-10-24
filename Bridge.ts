interface IDeliveryService {
    Deliver(package: string): void;
}

abstract class Delivery {
    protected deliveryService: IDeliveryService;

    constructor(service: IDeliveryService) {
        this.deliveryService = service;
    }

    abstract DeliverPackage(parcel: string): void;
}

class StandardDelivery extends Delivery {
    constructor(service: IDeliveryService) {
        super(service);
    }

    DeliverPackage(parcel: string): void {
        console.log("Standard delivery:");
        this.deliveryService.Deliver(parcel);
    }
}

class ExpressDelivery extends Delivery {
    constructor(service: IDeliveryService) {
        super(service);
    }

    DeliverPackage(parcel: string): void {
        console.log("Express delivery:");
        this.deliveryService.Deliver(parcel);
    }
}

class PostalService implements IDeliveryService {
    Deliver(parcel: string): void {
        console.log("Postal delivery: " + parcel);
    }
}

class CourierService implements IDeliveryService {
    Deliver(parcel: string): void {
        console.log("Courier delivery: " + parcel);
    }
}

const postalService = new PostalService();
const courierService = new CourierService();

const standardPostalDelivery = new StandardDelivery(postalService);
const expressCourierDelivery = new ExpressDelivery(courierService);

standardPostalDelivery.DeliverPackage("Parcel 1");
expressCourierDelivery.DeliverPackage("Parcel 2");