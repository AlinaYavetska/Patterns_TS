interface IObserver {
    update(message: string): void;
}

class DeliveryService implements IObserver {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(message: string): void {
        console.log(`${this.name} received notification: ${message}`);
    }
}

interface IObservable {
    addObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObservers(message: string): void;
}

class ProductDelivery implements IObservable {
    private observers: IObserver[] = [];
    private productName: string;
    private deliveryStatus: string;

    constructor(productName: string) {
        this.productName = productName;
        this.deliveryStatus = "In Transit";
    }

    addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    removeObserver(observer: IObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }

    updateDeliveryStatus(newStatus: string): void {
        this.deliveryStatus = newStatus;
        this.notifyObservers(`Status of ${this.productName} has been updated to: ${this.deliveryStatus}`);
    }
}

const laptopDelivery = new ProductDelivery("Laptop");

const postOffice1 = new DeliveryService("Post Office");
const courierService1 = new DeliveryService("Courier Service");

laptopDelivery.addObserver(postOffice1);
laptopDelivery.addObserver(courierService1);

laptopDelivery.updateDeliveryStatus("Delivered");