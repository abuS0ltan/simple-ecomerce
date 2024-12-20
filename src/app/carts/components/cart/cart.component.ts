import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart :any[]=[];
  success :boolean = false;
  disapledOrder :boolean = false;
  constructor(private services:CartsService,private render2:Renderer2,private el:ElementRef){}
  ngOnInit(){
    // load cart items from local storage
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.CheckIsCartEmpty();
  }

  UpdateCart($event: any,index: number) {
    console.log($event.target.value);
    if($event.target.value<=0){
      this.RemoveItem(index);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  AddQuantity(index:number){
    this.cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  MinusQuantity(index:number){
    if(this.cart[index].quantity > 1){
      this.cart[index].quantity--;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    } else {
      this.RemoveItem(index);
    }
    this.CheckIsCartEmpty();

  }
  GetTotalCart():number{
    let total = 0;
    for (let index in this.cart) {
      total=total+ this.cart[index].item.price*this.cart[index].quantity;
    }
    return total;
  }
  RemoveItem(index:number){
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.CheckIsCartEmpty();
  }
  ClearCart(){
    this.cart = [];
    localStorage.removeItem('cart');
    this.CheckIsCartEmpty();
  }
  OrderCart(){
    this.disapledOrder=true;
    let products=[];
    for (let index in this.cart) {
      products.push({productId: this.cart[index].item.id, quantity: this.cart[index].quantity});
    }
    let model={
      userId:5,
      date:new Date(),
      products:products
    }
    console.log(model);
    this.services.OrderCart(model).subscribe((res)=>{
      this.success=true;
      this.ClearCart();
    },error=>{
      if (error.status === 404) {
        alert('The requested resource was not found.');
      } else if (error.status === 500) {
        alert('Internal server error. Please try again later.');
      } else {
        alert('An unexpected error occurred. Please try again later. ');
      }
      this.disapledOrder=false
    });

    ;
  }
  CheckIsCartEmpty(){
    if(this.cart.length==0){
      this.disapledOrder=true;
    }
  }
  
}
