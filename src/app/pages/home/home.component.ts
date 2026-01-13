import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HeadSectionComponent } from '../../components/head-section/head-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, HeadSectionComponent,AboutSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
