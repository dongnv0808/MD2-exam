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
        let nameProduct = rl.question('Nhap ten: ');
        // console.log('--Chon loai hang hoa--');
        // console.log('1. Rau');
        // console.log('2. Thit');
        // console.log('3. Ca');
        // let choice = -1;
        // switch(choice){
        //     case 1: {
        //         let type = 'Thit';
        //         break;
        //     }
        //     case 2: {
        //         let type = 'Ca';
        //         break;
        //     }
        //     case 3: {
        //         let type = 'Rau';
        //         break;
        //     }
        // }
        let type = rl.question('Nhap loai hang hoa:')
        let price = +rl.question('Nhap gia: ');
        let amount = +rl.question('Nhap so luong: ');
        let dateCreated = rl.question('Nhap ngay tao: ');
        let describe = rl.question('Nhap mo ta: ');
        return new Product(nameProduct, type, price, amount, dateCreated, describe);
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