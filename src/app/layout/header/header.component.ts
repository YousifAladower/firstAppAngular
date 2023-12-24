import { Component } from '@angular/core';
import { BtnComponent } from '../../btn/btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    BtnComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
