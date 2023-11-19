class Product {
    public name: string;
    public price: number;
}

abstract class DeliveryHandler {
    protected nextHandler: DeliveryHandler;

    public setNextHandler(handler: DeliveryHandler): void {
        this.nextHandler = handler;
    }

    public abstract handleRequest(product: Product): void;
}

class PostOfficeHandler extends DeliveryHandler {
    public handleRequest(product: Product): void {
        if (product.price <= 50) {
            console.log(`Product ${product.name} will be delivered by post.`);
        } else if (this.nextHandler !== null) {
            this.nextHandler.handleRequest(product);
        }
    }
}

class CourierHandler extends DeliveryHandler {
    public handleRequest(product: Product): void {
        if (product.price > 50 && product.price <= 200) {
            console.log(`Product ${product.name} will be delivered by courier.`);
        } else if (this.nextHandler !== null) {
            this.nextHandler.handleRequest(product);
        }
    }
}

class CourierServiceHandler extends DeliveryHandler {
    public handleRequest(product: Product): void {
        if (product.price > 200) {
            console.log(`Product ${product.name} will be delivered by courier service.`);
        }
    }
}

const postOffice: DeliveryHandler = new PostOfficeHandler();
const courier: DeliveryHandler = new CourierHandler();
const courierService: DeliveryHandler = new CourierServiceHandler();

postOffice.setNextHandler(courier);
courier.setNextHandler(courierService);

const product: Product = { name: "Lapton", price: 220 };

postOffice.handleRequest(product);