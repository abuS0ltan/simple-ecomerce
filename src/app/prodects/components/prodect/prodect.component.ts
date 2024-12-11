import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prodect',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prodect.component.html',
  styleUrl: './prodect.component.css'
})
export class ProdectComponent {
  @Input() prodectInfo:any;
  @Output() item = new EventEmitter(); 
  addBtn :boolean = false;
  amount :number =0;
  Add(){
    this.item.emit({item:this.prodectInfo,quantity:this.amount});
  }
}
