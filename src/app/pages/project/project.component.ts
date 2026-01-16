import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterSectionComponent } from '../../components/footer-section/footer-section.component';

@Component({
  selector: 'app-project',
  imports: [NavBarComponent,FooterSectionComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
