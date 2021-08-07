import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import { PortfolioSimpleComponent } from './components/portfolio-simple/portfolio-simple.component';


const routes: Routes = [
    {
        path: 'home',
        component: PortfolioComponent
    },
    {
        path: 'simple',
        component: PortfolioSimpleComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RoutingModule { }
