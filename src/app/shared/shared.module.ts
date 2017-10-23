import { CityPipe } from './city.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe
  ],
  exports: [
    CityPipe
  ]
})
export class SharedModule { }