import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { NothinkComponent } from './nothink/nothink.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent,title:"Home"},
    {path:"about",component:AboutComponent , title:"About"},
    {path:"contact",component:ContactComponent,title:"contact"},
    {path:"portfolio",component:PortfolioComponent,title:"portfolio"},
    {path:"**",component:NothinkComponent, title:"found"},
    

];
