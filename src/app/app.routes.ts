import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetialsComponent } from './courses/course-detials/course-detials.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
   
    {path:'courses',component:CoursesComponent},
    {path:'courses',children:[
        {path:'course/:id',component:CourseDetialsComponent},
    ]},
   // {path:'courses/course/:id',component:CourseDetialsComponent},
   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
    {path:'contact',component:ContactComponent},
    {path:"**",component:NotFoundComponent,canActivate:[()=>{return false}]}
];
