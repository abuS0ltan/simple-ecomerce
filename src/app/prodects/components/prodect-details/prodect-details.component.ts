import { ActivatedRoute } from '@angular/router';
import { routes } from './../../../app.routes';
import { Component } from '@angular/core';
import { ProdectsService } from '../../services/prodects.service';
import { SpinnerComponent } from '../../../sheard/components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prodect-details',
  standalone: true,
  imports: [SpinnerComponent,FormsModule],
  templateUrl: './prodect-details.component.html',
  styleUrl: './prodect-details.component.css'
})
export class ProdectDetailsComponent {
  id!:number;
  details:any={};
  errorNumber!:number;
  cart:any[]=[];
  status="loading";
  amount:number=0;
  addBtn=false;
  constructor(private router:ActivatedRoute,private service:ProdectsService){}
  ngOnInit():void{
    this.id = Number( this.router.snapshot.paramMap.get('id'));
    this.FetchProdectDetails();
  }
  FetchProdectDetails(){
    this.service.GetProdectDetails(this.id).subscribe((res:any)=>{
      this.details=res;
      this.status="success";
    },error=>{
      this.HandelError(error.status);
    });
  }
  HandelError(number:number) {
    this.status="error"
    this.errorNumber=number;
  }

  AddToCart(){
    if('cart' in localStorage){
      this.cart=JSON.parse(localStorage.getItem('cart')!);
      let exist=this.cart.filter((item)=>item.id==this.details.id);
      if(exist){
        alert("Product already exist in cart");
        return;
      }
      this.cart.push({item: this.details,quantity:this.amount});
      localStorage.setItem('cart',JSON.stringify(this.cart));
    }
    else{
      this.cart.push({item: this.details,quantity:this.amount});
      localStorage.setItem('cart',JSON.stringify(this.cart));
    }
  }

}
