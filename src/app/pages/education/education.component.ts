import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterSectionComponent } from '../../components/footer-section/footer-section.component';

@Component({
  selector: 'app-education',
  imports: [NavBarComponent,FooterSectionComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
