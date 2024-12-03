import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    SpinnerComponent,
  ],
  exports: [HeaderComponent,SpinnerComponent]
})
export class SheardModule { }
