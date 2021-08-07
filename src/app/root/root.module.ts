import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';

import { RootDefaultComponent } from './components/root-default/root-default.component';
import { MaterialModule } from '../shared/material.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RoutingModule } from './route.module';
import { PortfolioSimpleComponent } from './components/portfolio-simple/portfolio-simple.component';



@NgModule({
  declarations: [
    RootDefaultComponent,
    PortfolioComponent,
    PortfolioSimpleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    NgxParallaxScrollModule,
    RoutingModule
  ],
  bootstrap: [RootDefaultComponent]
})
export class RootModule { }
