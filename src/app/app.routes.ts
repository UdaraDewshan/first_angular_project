import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { EducationComponent } from './pages/education/education.component';
import { ProjectComponent } from './pages/project/project.component';
import { SkillComponent } from './pages/skill/skill.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path:"contact",
        component: ContactComponent
    },
    {
        path:"about",
        component: AboutComponent
    },
    {
        path:"education",
        component: EducationComponent
    },
    {
        path:"project",
        component: ProjectComponent
    },
    {
        path:"skill",
        component: SkillComponent
    }
];
