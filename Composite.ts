abstract class DeliveryComponent {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    abstract deliver(): void;
  }
  
  class Product extends DeliveryComponent {
    constructor(name: string) {
      super(name);
    }
  
    deliver(): void {
      console.log(`Goods delivery: ${this.name}`);
    }
  }
  
  class DeliveryBox extends DeliveryComponent {
    components: DeliveryComponent[] = [];
  
    constructor(name: string) {
      super(name);
    }
  
    add(component: DeliveryComponent): void {
      this.components.push(component);
    }
  
    deliver(): void {
      console.log(`Parcel delivery: ${this.name}`);
  
      for (const component of this.components) {
        component.deliver();
      }
    }
  }
  
  const mainBox = new DeliveryBox("Main parcel");
  mainBox.add(new Product("Product 1"));
  mainBox.add(new Product("Product 2"));
  
  const extraProduct = new Product("Product 3");
  const extraBox = new DeliveryBox("Extra parcel");
  extraBox.add(extraProduct);
  
  mainBox.add(extraBox);
  
  mainBox.deliver();