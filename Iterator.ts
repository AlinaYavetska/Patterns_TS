interface Product {
    name: string;
    price: number;
}

interface IIterator {
    hasNext(): boolean;
    next(): Product;
}

interface IAggregate {
    createIterator(): IIterator;
}

class ProductCollection implements IAggregate {
    private products: Product[] = [];

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public createIterator(): IIterator {
        return new ProductIterator(this.products);
    }
}

class ProductIterator implements IIterator {
    private currentIndex: number = 0;

    constructor(private products: Product[]) {}

    hasNext(): boolean {
        return this.currentIndex < this.products.length;
    }

    next(): Product {
        if (this.hasNext()) {
            const nextProduct = this.products[this.currentIndex];
            this.currentIndex++;
            return nextProduct;
        } else {
            throw new Error("End of collection reached.");
        }
    }
}

const productCollection = new ProductCollection();
productCollection.addProduct({ name: "Laptop", price: 1200 });
productCollection.addProduct({ name: "Phone", price: 600 });
productCollection.addProduct({ name: "Tablet", price: 300 });

const iterator = productCollection.createIterator();

while (iterator.hasNext()) {
    const product = iterator.next();
    console.log(`Product: ${product.name}, Price: ${product.price}`);
}