import {RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import {MainComponent} from './main/main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PipeComponent } from './pipe/pipe.component';
import { ErrorNotfoundPageComponent } from './layout/error-notfound-page/error-notfound-page.component';
export const routes: Routes = [
  {
    path:"aboutus",
    component:AboutUsComponent

  },
  {
    path:"pipe",
    component:PipeComponent

  },
  {
    path:"",
    component:MainComponent

  },
  {
    path:"contact",
    component:ContactUsComponent

  },
  {
    path:"**",
    component:ErrorNotfoundPageComponent

  }
];




