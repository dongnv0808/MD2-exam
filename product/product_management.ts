import { Product } from "../module/product";

export class ProductManagement implements IProductManagement<Product>{
    private static products: Product[] = [];
    private static id: number = 0;

    getAll(): Product[] {
        return ProductManagement.products;
    }
    createNew(product: Product): void {
        ProductManagement.id++;
        product.$id = ProductManagement.id;
        ProductManagement.products.push(product);
    }
    updateById(id: number, product: Product): void {
        let indexUpdate = this.findById(id);
        if(indexUpdate !== -1){
            ProductManagement.products[indexUpdate] = product;
        }
    }
    removeById(id: number): void {
        let indexRemove = this.findById(id);
        if(indexRemove !== -1){
            ProductManagement.products.splice(indexRemove, 1);
        }
    }
    findById(id: number): number {
        let index = -1;
        for(let i = 0; i < ProductManagement.products.length; i++){
            if(ProductManagement.products[i].$id == id){
                index = i;
                break;
            }
        }
        return index;
    }
    findByName(name: string){
        for(let i = 0; i < ProductManagement.products.length; i++){
            if(ProductManagement.products[i].$nameProduct == name){
                return ProductManagement.products[i];
            }
        }
        return null;
    }
}