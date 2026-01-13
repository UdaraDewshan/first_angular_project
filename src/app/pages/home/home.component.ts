import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HeadSectionComponent } from '../../components/head-section/head-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { EducationSectionComponent } from '../../components/education-section/education-section.component';
import { ProjectSectionComponent } from '../../components/project-section/project-section.component';
import { SkillSectionComponent } from '../../components/skill-section/skill-section.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, HeadSectionComponent,AboutSectionComponent,EducationSectionComponent,ProjectSectionComponent,SkillSectionComponent,ContactSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
