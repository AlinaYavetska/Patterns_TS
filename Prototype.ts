interface IPrototype<T> {
    clone(): T;
}

class Product1 implements IPrototype<Product1> {
    constructor(public name: string, public price: number) {}

    clone(): Product1 {
        return new Product1(this.name, this.price);
    }

    toString(): string {
        return `${this.name} ${this.price}$`;
    }
}

class Address1 implements IPrototype<Address1> {
    constructor(public region: string, public city: string, public street: string, public houseNumber: string) {}

    clone(): Address1 {
        return new Address1(this.region, this.city, this.street, this.houseNumber);
    }

    toString(): string {
        return `${this.region}, ${this.city}, ${this.street}, ${this.houseNumber}`;
    }
}

class DeliverySystem1 {
    deliver(product: Product1, address: Address1): void {
        console.log(`Delivery of '${product}' to ${address}`);
    }
}

const initialProduct = new Product1("Milk", 5);
const initialAddress = new Address1("Chernivtsi", "Chernivtsi", "Holovna", "2A");

const deliverySystem1 = new DeliverySystem1();

const clonedProduct = initialProduct.clone();
const clonedAddress = initialAddress.clone();

deliverySystem1.deliver(initialProduct, initialAddress);
initialProduct.price = 7;
initialAddress.street = "Gaidara";
deliverySystem1.deliver(clonedProduct, clonedAddress);
clonedProduct.name = "Meat";
clonedAddress.city = "Khotyn";
deliverySystem1.deliver(initialProduct, initialAddress);
deliverySystem1.deliver(clonedProduct, clonedAddress);