class DeliveryMemento {
    constructor(public productName: string, public deliveryStatus: string) {}
}

class Delivery {
    productName: string;
    deliveryStatus: string;

    constructor(productName: string, deliveryStatus: string) {
        this.productName = productName;
        this.deliveryStatus = deliveryStatus;
    }

    saveState(): DeliveryMemento {
        return new DeliveryMemento(this.productName, this.deliveryStatus);
    }

    restoreState(memento: DeliveryMemento): void {
        this.productName = memento.productName;
        this.deliveryStatus = memento.deliveryStatus;
    }

    display(): void {
        console.log(`Product: ${this.productName}, Status: ${this.deliveryStatus}`);
    }
}

class DeliveryHistory {
    private mementos: DeliveryMemento[] = [];

    addMemento(memento: DeliveryMemento): void {
        this.mementos.push(memento);
    }

    getMemento(index: number): DeliveryMemento {
        return this.mementos[index];
    }
}

const delivery = new Delivery("Laptop", "In Transit");

const history1 = new DeliveryHistory();

history1.addMemento(delivery.saveState());

delivery.deliveryStatus = "Delivered";

history1.addMemento(delivery.saveState());

delivery.deliveryStatus = "Returned";

history1.addMemento(delivery.saveState());

delivery.restoreState(history1.getMemento(1));

delivery.display();