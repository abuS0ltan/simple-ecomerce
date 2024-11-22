import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SheardModule } from './sheard/sheard.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SheardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomerce';
}
