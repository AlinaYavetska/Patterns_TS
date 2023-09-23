interface IProduct {
    ship(): void;
}

class ForeignProduct implements IProduct {
    ship(): void {
        console.log("Foreign product");
    }
}

class UkrainianProduct implements IProduct {
    ship(): void {
        console.log("Ukrainian product");
    }
}

interface IDeliveryMethod {
    deliver(product: IProduct): void;
}

class ForeignDelivery implements IDeliveryMethod {
    deliver(product: IProduct): void {
        product.ship();
        console.log("Foreign delivery")
        console.log("*********************")
    }
}

class UkrainianDelivery implements IDeliveryMethod {
    deliver(product: IProduct): void {
        product.ship();
        console.log("Ukrainian delivery")
        console.log("*********************")
    }
}

interface IFactory {
    createProduct(): IProduct;
    createDeliveryMethod(): IDeliveryMethod;
}

class ForeignFactory implements IFactory {
    createProduct(): IProduct {
        return new ForeignProduct();
    }
    createDeliveryMethod(): IDeliveryMethod {
        return new ForeignDelivery();
    }
}

class UkrainianFactory implements IFactory {
    createProduct(): IProduct {
        return new UkrainianProduct();
    }
    createDeliveryMethod(): IDeliveryMethod {
        return new UkrainianDelivery();
    }
}



const foreignFactory : ForeignFactory = new ForeignFactory();
const foreignProduct : ForeignProduct = foreignFactory.createProduct();
const foreignDeliveryMethod : ForeignDelivery = foreignFactory.createDeliveryMethod();

foreignDeliveryMethod.deliver(foreignProduct);

const ukrainianFactory : UkrainianFactory = new UkrainianFactory();
const ukrainianProduct : UkrainianProduct = ukrainianFactory.createProduct();
const ukrainianDeliveryMethod : UkrainianDelivery = ukrainianFactory.createDeliveryMethod();

ukrainianDeliveryMethod.deliver(ukrainianProduct);

foreignDeliveryMethod.deliver(ukrainianProduct);

ukrainianDeliveryMethod.deliver(foreignProduct)














