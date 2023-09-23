class Delivery {
    public deliveryId: number;
    public destination: string;
    public status: string;

    public startDelivery(): void {
        this.status = "In Progress";
    }

    public completeDelivery(): void {
        this.status = "Delivered";
    }
}

class DeliveryPool {
    private availableDeliveries: Delivery[] = [];
    private nextDeliveryId: number = 1;

    constructor(initialCapacity: number) {
        // for (let i = 0; i < initialCapacity; i++) {
        //     const newDelivery = new Delivery();
        //     newDelivery.deliveryId = this.nextDeliveryId++;
        //     this.availableDeliveries.push(newDelivery);
        // }
    }

    public acquireDelivery(destination: string): Delivery {
        if (this.availableDeliveries.length === 0) {
            console.log("Creating a new delivery");
            const newDelivery = new Delivery();
            newDelivery.deliveryId = this.nextDeliveryId++;
            newDelivery.destination = destination;
            return newDelivery;
        } else {
            const existingDelivery = this.availableDeliveries.shift(); 
            if (existingDelivery) {
                existingDelivery.destination = destination;
                console.log(`Reusing delivery ${existingDelivery.deliveryId}`);
                return existingDelivery;
            } else {
                throw new Error("No available deliveries.");
            }
        }
    }

    public releaseDelivery(delivery: Delivery): void {
        delivery.status = "Returned to pool";
        this.availableDeliveries.push(delivery);
    }
}

const deliveryPool = new DeliveryPool(4);

const client1Delivery = deliveryPool.acquireDelivery("address 1");
client1Delivery.startDelivery();
client1Delivery.completeDelivery();
deliveryPool.releaseDelivery(client1Delivery);

const client2Delivery = deliveryPool.acquireDelivery("address 2");
client2Delivery.startDelivery();
client2Delivery.completeDelivery();
deliveryPool.releaseDelivery(client2Delivery);

const client3Delivery = deliveryPool.acquireDelivery("address 3");
client3Delivery.startDelivery();
client3Delivery.completeDelivery();
deliveryPool.releaseDelivery(client3Delivery);

const client4Delivery = deliveryPool.acquireDelivery("address 4");
client4Delivery.startDelivery();
client4Delivery.completeDelivery();
deliveryPool.releaseDelivery(client4Delivery);

const client5Delivery = deliveryPool.acquireDelivery("address 5");
client5Delivery.startDelivery();
client5Delivery.completeDelivery();
deliveryPool.releaseDelivery(client5Delivery);

const client6Delivery = deliveryPool.acquireDelivery("address 6");
client6Delivery.startDelivery();
client6Delivery.completeDelivery();
deliveryPool.releaseDelivery(client6Delivery);

const client7Delivery = deliveryPool.acquireDelivery("address 7");
client7Delivery.startDelivery();
client7Delivery.completeDelivery();
deliveryPool.releaseDelivery(client7Delivery);

const client8Delivery = deliveryPool.acquireDelivery("address 8");
client8Delivery.startDelivery();
client8Delivery.completeDelivery();
deliveryPool.releaseDelivery(client8Delivery);

const client9Delivery = deliveryPool.acquireDelivery("address 9");
client9Delivery.startDelivery();
client9Delivery.completeDelivery();
deliveryPool.releaseDelivery(client9Delivery);