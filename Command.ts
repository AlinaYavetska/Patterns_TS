interface ICommand {
    execute(): void;
}

class Product {
    public name: string;
    public price: number;
}

class PostOfficeCommand implements ICommand {
    private readonly product: Product;

    constructor(product: Product) {
        this.product = product;
    }

    public execute(): void {
        console.log(`Product ${this.product.name} will be delivered by post.`);
    }
}

class CourierCommand implements ICommand {
    private readonly product: Product;

    constructor(product: Product) {
        this.product = product;
    }

    public execute(): void {
        console.log(`Product ${this.product.name} will be delivered by courier.`);
    }
}

class DeliveryInvoker {
    private readonly commands: ICommand[] = [];

    public setCommand(command: ICommand): void {
        this.commands.push(command);
    }

    public processCommands(): void {
        this.commands.forEach(command => {
            command.execute();
        });
        this.commands.length = 0;
    }
}

const product: Product = { name: "Laptop", price: 180 };

const postOfficeCommand: ICommand = new PostOfficeCommand(product);
const courierCommand: ICommand = new CourierCommand(product);

const invoker: DeliveryInvoker = new DeliveryInvoker();
invoker.setCommand(postOfficeCommand);
invoker.setCommand(courierCommand);

invoker.processCommands();