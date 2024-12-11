import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prodect',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prodect.component.html',
  styleUrl: './prodect.component.css'
})
export class ProdectComponent {
  constructor(private router:Router){}
  @Input() prodectInfo:any;
  @Output() item = new EventEmitter(); 
  addBtn :boolean = false;
  amount :number =0;
  Add(){
    this.item.emit({item:this.prodectInfo,quantity:this.amount});
  }
  GoToDetail(){
    const id:number=this.prodectInfo.id;
    this.router.navigate([`product/${id}`])
  }
}
