import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudBuilderModule } from './crud-builder/crud-builder.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    CrudBuilderModule
  ],
  exports: [
    CrudBuilderModule
  ]
})
export class CoreModule { }
