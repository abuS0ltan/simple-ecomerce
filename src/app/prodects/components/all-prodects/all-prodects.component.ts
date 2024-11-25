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
  constructor(private service:ProdectsService){}
  ngOnInit():void{
    this.GetProdects();
  }
  GetProdects(){
    this.service.GetAllProdects().subscribe((res:any)=>{
      this.products=res;
    })
  }

}
