import { Component } from '@angular/core';
import { ProdectsService } from '../../services/prodects.service';
import { SpinnerComponent } from "../../../sheard/components/spinner/spinner.component";
import { SelectComponent } from "../../../sheard/components/select/select.component";
import { ProdectComponent } from '../prodect/prodect.component';

@Component({
  selector: 'app-all-prodects',
  standalone: true,
  imports: [SpinnerComponent, SelectComponent,ProdectComponent],
  templateUrl: './all-prodects.component.html',
  styleUrl: './all-prodects.component.css'
})
export class AllProdectsComponent {
  cartProdects :any[]=[];
  products:any[]=[];
  categorys:any[]=[];
  status="loading";
  errorNumber=0;
  constructor(private service:ProdectsService){}
  ngOnInit():void{
    this.GetProdects();
    this.GetCategories();
  }
  GetProdects(){
    this.service.GetAllProdects().subscribe((res:any)=>{
      this.products=res;
      this.status="success";
    },error=>{
      this.HandelError(error.status);
    })
  }
  GetCategories(){
    this.service.GetAllCategory().subscribe((res:any)=>{
      this.categorys=res;
      this.status="success";
    },error=>{
      this.HandelError(error.status);
    })
  }
  GetProdectsByCategory(category:string){
    this.service.GetCategoryProdects(category).subscribe((res:any)=>{
      this.products=res;
      this.status="success";
    },error=>{
      this.HandelError(error.status);
    });
  }
  HandelError(number:number) {
    this.status="error"
    this.errorNumber=number;
  }

  FilterProdects(event:any){
    this.status="loading";
    (event.target.value==='all') ? this.GetProdects():this.GetProdectsByCategory(event.target.value);
    
  }
  AddToCart(event:any){

    if ("cart" in localStorage){
      this.cartProdects=JSON.parse(localStorage.getItem("cart")!);
      let exist=this.cartProdects.find(item_ => item_.item.id==event.item.id);
      if(exist){
        alert("prodects already exist in cart");
        
      }
      else{
        this.cartProdects.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartProdects));
      }
    }
    else{
      this.cartProdects.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProdects));
    }
  }
}


