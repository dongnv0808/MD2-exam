export class Product{
    private id: number = 0;
    private nameProduct: string;
    private type: string;
    private price: number;
    private amount: number;
    private dateCreated: string;
    private describe: string;

	constructor($nameProduct: string, $type: string, $price: number, $amount: number, $dateCreated: string, $describe: string) {
		this.nameProduct = $nameProduct;
		this.type = $type;
		this.price = $price;
		this.amount = $amount;
		this.dateCreated = $dateCreated;
		this.describe = $describe;
	}
    
	public get $id(): number  {
		return this.id;
	}
	
	public get $nameProduct(): string {
		return this.nameProduct;
	}
	public get $type(): string {
		return this.type;
	}
	public get $price(): number {
		return this.price;
	}
	public get $amount(): number {
		return this.amount;
	}
	public get $dateCreated(): string {
		return this.dateCreated;
	}
	public get $describe(): string {
		return this.describe;
	}
	public set $id(value: number ) {
		this.id = value;
	}
	public set $nameProduct(value: string) {
		this.nameProduct = value;
	}
	public set $type(value: string) {
		this.type = value;
	}
	public set $price(value: number) {
		this.price = value;
	}
	public set $amount(value: number) {
		this.amount = value;
	}
	public set $dateCreated(value: string) {
		this.dateCreated = value;
	}
	public set $describe(value: string) {
		this.describe = value;
	}

}