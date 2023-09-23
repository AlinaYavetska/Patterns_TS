var Delivery = /** @class */ (function () {
    function Delivery() {
    }
    Delivery.prototype.startDelivery = function () {
        this.status = "In Progress";
    };
    Delivery.prototype.completeDelivery = function () {
        this.status = "Delivered";
    };
    return Delivery;
}());
var DeliveryPool = /** @class */ (function () {
    function DeliveryPool(initialCapacity) {
        this.availableDeliveries = [];
        this.nextDeliveryId = 1;
        // for (let i = 0; i < initialCapacity; i++) {
        //     const newDelivery = new Delivery();
        //     newDelivery.deliveryId = this.nextDeliveryId++;
        //     this.availableDeliveries.push(newDelivery);
        // }
    }
    DeliveryPool.prototype.acquireDelivery = function (destination) {
        if (this.availableDeliveries.length === 0) {
            console.log("Creating a new delivery");
            var newDelivery = new Delivery();
            newDelivery.deliveryId = this.nextDeliveryId++;
            newDelivery.destination = destination;
            return newDelivery;
        }
        else {
            var existingDelivery = this.availableDeliveries.shift(); // Remove and return the first delivery
            if (existingDelivery) {
                existingDelivery.destination = destination;
                console.log("Reusing delivery ".concat(existingDelivery.deliveryId));
                return existingDelivery;
            }
            else {
                throw new Error("No available deliveries.");
            }
        }
    };
    DeliveryPool.prototype.releaseDelivery = function (delivery) {
        delivery.status = "Returned to pool";
        this.availableDeliveries.push(delivery);
    };
    return DeliveryPool;
}());
var deliveryPool = new DeliveryPool(4);
var client1Delivery = deliveryPool.acquireDelivery("address 1");
client1Delivery.startDelivery();
client1Delivery.completeDelivery();
deliveryPool.releaseDelivery(client1Delivery);
var client2Delivery = deliveryPool.acquireDelivery("address 2");
client2Delivery.startDelivery();
client2Delivery.completeDelivery();
deliveryPool.releaseDelivery(client2Delivery);
var client3Delivery = deliveryPool.acquireDelivery("address 3");
client3Delivery.startDelivery();
client3Delivery.completeDelivery();
deliveryPool.releaseDelivery(client3Delivery);
var client4Delivery = deliveryPool.acquireDelivery("address 4");
client4Delivery.startDelivery();
client4Delivery.completeDelivery();
deliveryPool.releaseDelivery(client4Delivery);
var client5Delivery = deliveryPool.acquireDelivery("address 5");
client5Delivery.startDelivery();
client5Delivery.completeDelivery();
deliveryPool.releaseDelivery(client5Delivery);
var client6Delivery = deliveryPool.acquireDelivery("address 6");
client6Delivery.startDelivery();
client6Delivery.completeDelivery();
deliveryPool.releaseDelivery(client6Delivery);
var client7Delivery = deliveryPool.acquireDelivery("address 7");
client7Delivery.startDelivery();
client7Delivery.completeDelivery();
deliveryPool.releaseDelivery(client7Delivery);
var client8Delivery = deliveryPool.acquireDelivery("address 8");
client8Delivery.startDelivery();
client8Delivery.completeDelivery();
deliveryPool.releaseDelivery(client8Delivery);
var client9Delivery = deliveryPool.acquireDelivery("address 9");
client9Delivery.startDelivery();
client9Delivery.completeDelivery();
deliveryPool.releaseDelivery(client9Delivery);
