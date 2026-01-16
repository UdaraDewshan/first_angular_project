import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../../pages/contact/contact.component';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
