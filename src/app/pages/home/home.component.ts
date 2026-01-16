import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HeadSectionComponent } from '../../components/head-section/head-section.component';
import { SkillSectionComponent } from '../../components/skill-section/skill-section.component';
import { FooterSectionComponent } from '../../components/footer-section/footer-section.component';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, HeadSectionComponent,SkillSectionComponent,FooterSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
