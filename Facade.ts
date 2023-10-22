class Order {
  }
  
  class ShippingCostCalculator {
    calculateShippingCost(order: Order): number {
      return 10;
    }
  }
  
  class DeliveryInfoProvider {
    getDeliveryInfo(order: Order): string {
      return "Delivery info";
    }
  }
  
  class DeliveryTracker {
    trackDelivery(order: Order): string {
      return "Tracked delivery";
    }
  }
  
  class DeliveryFacade {
    private costCalculator: ShippingCostCalculator;
    private infoProvider: DeliveryInfoProvider;
    private tracker: DeliveryTracker;
  
    constructor() {
      this.costCalculator = new ShippingCostCalculator();
      this.infoProvider = new DeliveryInfoProvider();
      this.tracker = new DeliveryTracker();
    }
  
    processOrder(order: Order): void {
      console.log(this.costCalculator.calculateShippingCost(order));
  
      console.log(this.infoProvider.getDeliveryInfo(order));
  
      console.log(this.tracker.trackDelivery(order));
  
      // Other logic
  
      console.log("Order processed successfully.");
    }
  }
  
  
  const deliveryFacade = new DeliveryFacade();
  const order = new Order();
  
  deliveryFacade.processOrder(order);