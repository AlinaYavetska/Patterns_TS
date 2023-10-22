interface IDeliveryService {
    calculateShippingCost(): number;
    getDeliveryInfo(): string;
}

class StandardDeliveryService implements IDeliveryService {
    calculateShippingCost(): number {
        return 100;
    }

    getDeliveryInfo(): string {
        return "Standard delivery";
    }
}

class InsuranceDecorator implements IDeliveryService {
    private deliveryService: IDeliveryService;

    constructor(deliveryService: IDeliveryService) {
        this.deliveryService = deliveryService;
    }

    calculateShippingCost(): number {
        const baseCost = this.deliveryService.calculateShippingCost();
        const insuranceCost = 10.0;
        return baseCost + insuranceCost;
    }

    getDeliveryInfo(): string {
        const baseInfo = this.deliveryService.getDeliveryInfo();
        return `${baseInfo} + Insurance`;
    }
}

class TrackingDecorator implements IDeliveryService {
    private deliveryService: IDeliveryService;

    constructor(deliveryService: IDeliveryService) {
        this.deliveryService = deliveryService;
    }

    calculateShippingCost(): number {
        return this.deliveryService.calculateShippingCost();
    }

    getDeliveryInfo(): string {
        const baseInfo = this.deliveryService.getDeliveryInfo();
        return `${baseInfo} + Tracking`;
    }
}

const standardDelivery = new StandardDeliveryService();
console.log(standardDelivery.getDeliveryInfo())
const insuredDelivery = new InsuranceDecorator(standardDelivery);
console.log(insuredDelivery.getDeliveryInfo())
const trackingAndInsuredDelivery = new TrackingDecorator(insuredDelivery); 
console.log(trackingAndInsuredDelivery.getDeliveryInfo())