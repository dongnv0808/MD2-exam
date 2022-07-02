import { ProductManagement } from "../product/product_management";
import * as rl from 'readline-sync';
import { Product } from "../module/product";

export class MenuManagement{
    private productMenu = new ProductManagement();

    run(){
        let choice = -1;
        do{
            console.log('--Quan ly hang xoa trong sieu thi--');
            console.log('1. Hien thi danh sach hang hoa.');
            console.log('2. Tim kiem hang hoa theo ten hang.');
            console.log('3. Nhap thong tin mat hang moi.');
            console.log('4. Chinh sua thong tin mat hang.');
            console.log('5. Xoa mot mat hang khoi ung dung.');
            console.log('0. Quay lai.')
            choice = +rl.question('\nNhap lua chon cua ban:');
            switch(choice){
                case 1: {
                    this.getAllProduct();
                    break;
                }
                case 2: {
                    this.searchProductByName();
                    break;
                }
                case 3: {
                    this.creteNewProduct();
                    break;
                }
                case 4: {
                    this.updateProduct();
                    break;
                }
                case 5: {
                    this.removeProduct();
                    break;
                }
            }
        }while(choice !== 0)
    }

    getAllProduct(){
        console.log('\n--Danh sach hang hoa trong sieu thi--\n');
        let products = this.productMenu.getAll();
        let count = 0;
        if(products.length == 0){
            console.log('\nKhong co du lieu!\n');
        }else{
            for(let i = 0; i < products.length; i++){
                console.log(`Ma: ${products[i].$id} | Ten: ${products[i].$nameProduct} | Loai: ${products[i].$type} | Gia: ${products[i].$price} | So luong: ${products[i].$amount} | Ngay nhap: ${products[i].$dateCreated} | Mo ta: ${products[i].$describe}\n`)
                count++;
                if(count == 5){
                    break;
                }
            }
        }
    }

    searchProductByName(){
        console.log('\n--Tim kiem hang hoa theo ten--\n');
        let products = this.productMenu.getAll();
        let arrProduct = [];
        let nameProduct = rl.question('Nhap ten hang hoa muon tim: ');

        for(let i = 0; i < products.length; i++){
            if(products[i].$nameProduct.includes(nameProduct) == true){
                arrProduct.push(products[i]);
            }
        }
        
        if(arrProduct.length == 0){
            console.log('Khong co du lieu phu hop');
        }else{
            for(let i = 0; i < arrProduct.length; i++){
                console.log(`Ma: ${arrProduct[i].$id} | Ten: ${arrProduct[i].$nameProduct} | Loai: ${arrProduct[i].$type} | Gia: ${arrProduct[i].$price} | So luong: ${arrProduct[i].$amount} | Ngay nhap: ${arrProduct[i].$dateCreated} | Mo ta: ${arrProduct[i].$describe}\n`)
            }
        }
    }

    inputProduct(){
        let nameRegex: RegExp = /^[a-zA-Z0-9]{6,}$/;
        let nameProduct = this.inputNameProduct(nameRegex);
        let type = this.inputType();
        let numberRegex: RegExp = /^[1-9]\d{0,}$/;
        let price = this.inputPrice(numberRegex);
        let amount = this.inputAmount(numberRegex);
        let dateCreated = new Date();
        let describeRegex: RegExp = /^[a-zA-Z0-9]{20,}$/;
        let describe = this.inputDescribe(describeRegex);
        return new Product(nameProduct, type, price, amount, dateCreated, describe);
    }

    inputNameProduct(nameRegex: RegExp): string{
        let nameProduct = '';
        let isValidName = true;
        do{
            nameProduct = rl.question('Nhap ten hang hoa nhieu nhat 8 ky tu: ');
            let currentName = this.productMenu.findByName(nameProduct);
            if(currentName){
                console.log('\nHang hoa da ton tai!\n');
                isValidName = false;
            }else if(nameProduct == ''){
                console.log('\nKhong duoc de trong!\n')
                isValidName = false;
            }else if(!nameRegex.test(nameProduct)){
                console.log('\nTen hang hoa it nhat 6 ky tu!\n');
                isValidName = false;
            }else{
                isValidName = true;
            }
        }while(!isValidName)
        return nameProduct;
    }

    inputType(): string{
        let type = '';
        let isValidChoice = true;
        let choice = -1;
        do{
            console.log('--Nhap loai hang hoa--');
            console.log('1. Thit');
            console.log('2. Ca');
            console.log('3. Rau');
            choice = +rl.question('Nhap lua chon cua ban');
            if(choice == 1){
                type = 'Thit';
                isValidChoice = true;
            }else if(choice == 2){
                type = 'Ca';
                isValidChoice = true;
            }else if(choice == 3){
                type = 'Rau';
                isValidChoice = true;
            }else{
                console.log('\nNhap 1, 2 hoac 3!\n');
                isValidChoice = false;
            }  
        }while(!isValidChoice)
        return type;
    }

    inputPrice(numberRegex: RegExp): number{
        let price = '';
        let currentPrice = 0;
        let isValidPrice = true;
        do{
            console.log('\n--Nhap gia hang hoa--\n');
            price = rl.question('Nhap gia: ');
            if(price == ''){
                console.log('\nKhong duoc de trong\n');
                isValidPrice = false;
            }else if(!numberRegex.test(price)){
                console.log('\nGia phai la 1 so nguyen duong\n');
                isValidPrice = false;
            }else{
                currentPrice = +price;
                isValidPrice = true;
            }
        }while(!isValidPrice)
        return currentPrice;
    }

    inputAmount(numberRegex: RegExp): number{
        let amount = '';
        let currentAmount = 0;
        let isValidPrice = true;
        do{
            console.log('\n--Nhap so luong hang hoa--\n');
            amount = rl.question('Nhap so luong: ');
            if(amount == ''){
                console.log('\nKhong duoc de trong so luong hang hoa!\n');
                isValidPrice = false;
            }else if(!numberRegex.test(amount)){
                console.log('\nSo luong phai hang hoa phai la mot so nguyen duong\n');
                isValidPrice = false;
            }else{
                currentAmount = +amount;
                isValidPrice = true;
            }
        }while(!isValidPrice)
        return currentAmount;
    }

    inputDescribe(describeRegex: RegExp): string{
        let describe = '';
        let isValidDescribe = true;
        do{
            console.log('\n--Nhap mo ta san pham\n')
            describe = rl.question('Nhap mo ta san pham: ');
            if(describe == ''){
                console.log('\nKhong duoc de trong mo ta!\n');
                isValidDescribe = false;
            }else if(!describeRegex.test(describe)){
                console.log('\nNhap it nhat 20 ky tu!\n');
                isValidDescribe = false;
            }else{
                isValidDescribe = true;
            }
        }while(!isValidDescribe)
        return describe;
    }

    creteNewProduct(){
        let product = this.inputProduct();
        this.productMenu.createNew(product);
    }

    updateProduct(){
        let products = this.productMenu.getAll();
        console.log('\n--Sua hang hoa--\n');
        if(products.length == 0){
            console.log('Khong co du lieu');
        }else{
            for(let i = 0; i < products.length; i++){
                console.log(`Ma: ${products[i].$id} | Ten: ${products[i].$nameProduct} | Loai: ${products[i].$type} | Gia: ${products[i].$price} | So luong: ${products[i].$amount} | Ngay nhap: ${products[i].$dateCreated} | Mo ta: ${products[i].$describe}\n`)
            }
        }
        let idProduct = +rl.question('Nhap ma hang hoa muon sua: ');
        let indexProduct = this.productMenu.findById(idProduct);
        if(indexProduct !== -1){
            let product = this.inputProduct();
            product.$id = idProduct;
            this.productMenu.updateById(idProduct, product);
        }else{
            console.log('Khong ton tai mat hang can update')
        }
    }

    removeProduct(){
        let products = this.productMenu.getAll();
        console.log('\n--Xoa hang hoa--\n');
        if(products.length == 0){
            console.log('Khong co du lieu');
        }else{
            for(let i = 0; i < products.length; i++){
                console.log(`Ma: ${products[i].$id} | Ten: ${products[i].$nameProduct} | Loai: ${products[i].$type} | Gia: ${products[i].$price} | So luong: ${products[i].$amount} | Ngay nhap: ${products[i].$dateCreated} | Mo ta: ${products[i].$describe}\n`)
            }
        }
        let idProduct = +rl.question('Nhap ma hang hoa muon xoa: ');
        let indexProduct = this.productMenu.findById(idProduct);
        if(indexProduct !== -1){
            this.productMenu.removeById(idProduct);
            console.log('Xoa thanh cong');
        }else{
            console.log('Khong ton tai mat hang can xoa');
        }
    }
}