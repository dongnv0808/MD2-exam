"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor($nameProduct, $type, $price, $amount, $dateCreated, $describe) {
        this.id = 0;
        this.nameProduct = $nameProduct;
        this.type = $type;
        this.price = $price;
        this.amount = $amount;
        this.dateCreated = $dateCreated;
        this.describe = $describe;
    }
    get $id() {
        return this.id;
    }
    get $nameProduct() {
        return this.nameProduct;
    }
    get $type() {
        return this.type;
    }
    get $price() {
        return this.price;
    }
    get $amount() {
        return this.amount;
    }
    get $dateCreated() {
        return this.dateCreated;
    }
    get $describe() {
        return this.describe;
    }
    set $id(value) {
        this.id = value;
    }
    set $nameProduct(value) {
        this.nameProduct = value;
    }
    set $type(value) {
        this.type = value;
    }
    set $price(value) {
        this.price = value;
    }
    set $amount(value) {
        this.amount = value;
    }
    set $dateCreated(value) {
        this.dateCreated = value;
    }
    set $describe(value) {
        this.describe = value;
    }
}
exports.Product = Product;
