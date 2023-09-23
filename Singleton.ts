  class Product {
    constructor(public name: string, public price: number) {}

    toString(): string {
        return `${this.name}, ${this.price}$`;
      }
  }
  
  class Address {
    constructor(public region: string, public city: string, public street: string, public houseNumber: string) {}
  
    toString(): string {
      return `${this.region} region, ${this.city}, ${this.street} ${this.houseNumber}`;
    }
  }
  
  class DeliverySystem {
    private static instance: DeliverySystem | null = null;
  
    private constructor() {
    }
  
    static getInstance(): DeliverySystem {
      if (!DeliverySystem.instance) {
        DeliverySystem.instance = new DeliverySystem();
      }
      
      return DeliverySystem.instance;
    }
  
    deliverProduct(product: Product, address: Address): void {
      console.log(`Delivery of '${product}' to ${address}`);
    }
  }
  
  const laptop = new Product("Milk", 5);
  const smartphone = new Product("Water", 2);
  
  const address1 = new Address("Chernivtsi", "Chernivtsi", "Holovna", "2A");
  const address2 = new Address("Chernivtsi", "Chernivtsi", "Holovna", "260");
  
  const deliverySystem = DeliverySystem.getInstance();
  deliverySystem.deliverProduct(laptop, address1);
  deliverySystem.deliverProduct(smartphone, address2);
  