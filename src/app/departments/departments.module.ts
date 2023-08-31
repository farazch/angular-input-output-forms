import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsComponent } from './departments.component';



@NgModule({
  declarations: [DepartmentsComponent],
  imports: [
    CommonModule
  ],
  exports: [DepartmentsComponent]
})
export class DepartmentsModule {

    constructor(){

      console.log("Dept component loading !!!");
    }

 }
