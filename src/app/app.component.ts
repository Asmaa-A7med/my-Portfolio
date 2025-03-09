import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from './nav-bar/nav-bar.component'; 
import {HomeComponent} from './home/home.component'; 
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';
//import {ProjectsComponent} from './projects/projects.component';

import {ProjectComponent} from './project/project.component';
import {FooterComponent} from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
   // ProjectsComponent,
    ProjectComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Protofilio';
}
