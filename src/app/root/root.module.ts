import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RootDefaultComponent } from './components/root-default/root-default.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    RootDefaultComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  bootstrap: [RootDefaultComponent]
})
export class RootModule { }
