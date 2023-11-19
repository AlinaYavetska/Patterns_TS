class Product {
    name: string;
    price: number;
}

interface IDeliveryMediator {
    registerParticipant(participant: DeliveryParticipant): void;
    sendNotification(message: string, sender: DeliveryParticipant): void;
}

abstract class DeliveryParticipant {
    protected readonly mediator: IDeliveryMediator;
    name: string;

    constructor(mediator: IDeliveryMediator, name: string) {
        this.mediator = mediator;
        this.name = name;
        mediator.registerParticipant(this);
    }

    abstract receiveNotification(message: string): void;
}

class PostOffice extends DeliveryParticipant {
    constructor(mediator: IDeliveryMediator) {
        super(mediator, "Post Office");
    }

    receiveNotification(message: string): void {
        console.log(`${this.name} received notification: ${message}`);
    }
}

class CourierService extends DeliveryParticipant {
    constructor(mediator: IDeliveryMediator) {
        super(mediator, "Courier Service");
    }

    receiveNotification(message: string): void {
        console.log(`${this.name} received notification: ${message}`);
    }
}

class Customer extends DeliveryParticipant {
    constructor(mediator: IDeliveryMediator, name: string) {
        super(mediator, name);
    }

    receiveNotification(message: string): void {
        console.log(`${this.name} received notification: ${message}`);
    }

    placeOrder(product: Product): void {
        const orderMessage = `Order placed for ${product.name} with price ${product.price}`;
        console.log(`${this.name} ${orderMessage}`);
        this.mediator.sendNotification(orderMessage, this);
    }
}

class DeliveryMediator implements IDeliveryMediator {
    private participants: DeliveryParticipant[] = [];

    registerParticipant(participant: DeliveryParticipant): void {
        this.participants.push(participant);
    }

    sendNotification(message: string, sender: DeliveryParticipant): void {
        this.participants
            .filter(participant => participant !== sender)
            .forEach(participant => participant.receiveNotification(message));
    }
}

const mediator = new DeliveryMediator();

const postOffice = new PostOffice(mediator);
const courierService = new CourierService(mediator);
const customer1 = new Customer(mediator, "Customer 1");
const customer2 = new Customer(mediator, "Customer 2");

customer1.placeOrder({ name: "Laptop", price: 1200 });
customer2.placeOrder({ name: "Smartphone", price: 600 });