import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MapApp } from './map.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
   ],
  declarations: [
    MapApp
  ],
  bootstrap: [ MapApp ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
