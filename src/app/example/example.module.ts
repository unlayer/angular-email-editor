import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { EmailEditorModule } from 'email-editor';

import { ExampleComponent } from './example.component';

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    EmailEditorModule
  ]
})
export class ExampleModule { }
