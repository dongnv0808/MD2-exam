interface IProductManagement<T>{
    getAll(): T[];
    createNew(product: T): void;
    updateById(id: number, product: T): void;
    removeById(id: number): void;
    findById(id: number): number;
    findByName(name: string): T | null;
}