import { Component } from '@angular/core';
import { ProdectsService } from '../../services/prodects.service';

@Component({
  selector: 'app-all-prodects',
  standalone: true,
  imports: [],
  templateUrl: './all-prodects.component.html',
  styleUrl: './all-prodects.component.css'
})
export class AllProdectsComponent {
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
    console.log(event.target.value);
    (event.target.value==='all') ? this.GetProdects():this.GetProdectsByCategory(event.target.value);
    
  }
}


