interface IDeliveryMethod {
    calculateCost(): number;
    deliver(): void;
}

class PostalDelivery implements IDeliveryMethod {
    calculateCost(): number {
        return 10.0;
    }

    deliver(): void {
        console.log("Parcel delivered by post.");
    }
}

class CourierDelivery implements IDeliveryMethod {
    calculateCost(): number {
        return 20.0;
    }

    deliver(): void {
        console.log("Parcel delivered by courier.");
    }
}

class NovaPoshta {
    calculateNovaPoshtaCost(): number {
        return 15.0;
    }

    novaPoshtaDeliver(): void {
        console.log("Parcel delivered by Nova Poshta.");
    }
}

class NovaPoshtaAdapter implements IDeliveryMethod {
    private novaPoshta: NovaPoshta;

    constructor(novaPoshta: NovaPoshta) {
        this.novaPoshta = novaPoshta;
    }

    calculateCost(): number {
        return this.novaPoshta.calculateNovaPoshtaCost();
    }

    deliver(): void {
        this.novaPoshta.novaPoshtaDeliver();
    }
}

const postalDelivery: IDeliveryMethod = new PostalDelivery();
const courierDelivery: IDeliveryMethod = new CourierDelivery();

// Використання адаптера для служби доставки Нова Пошта
const novaPoshta: NovaPoshta = new NovaPoshta();
const novaPoshtaAdapter: IDeliveryMethod = new NovaPoshtaAdapter(novaPoshta);

const postalCost: number = postalDelivery.calculateCost();
postalDelivery.deliver();
console.log(postalCost)

const courierCost: number = courierDelivery.calculateCost();
courierDelivery.deliver();
console.log(courierCost)

const novaPoshtaCost: number = novaPoshtaAdapter.calculateCost();
novaPoshtaAdapter.deliver();
console.log(novaPoshtaCost)