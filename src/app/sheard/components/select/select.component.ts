import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() title:string ='';
  @Input() data:any[]=[];
  @Output() selectedValue = new EventEmitter();
  changeDetection(event:any){
    this.selectedValue.emit(event);
  }
}
