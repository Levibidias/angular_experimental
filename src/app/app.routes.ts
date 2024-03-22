import { Routes } from '@angular/router';
import { OpencloseComponent } from './openclose/openclose.component';
import { CheckmarkComponent } from './checkmark/checkmark.component';
import { HomeComponent } from './home/home.component';



export const routes: Routes = [
    {path:'',component: HomeComponent, title:'page de transition' },
    {path:'openclose',component:OpencloseComponent,title:'openclose_Animation'},
    {path:'checkmark', component:CheckmarkComponent, title:'checkmark animation'}
];
