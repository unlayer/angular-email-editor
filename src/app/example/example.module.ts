import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';

import { ExampleComponent } from './example.component';
import { EmailEditorModule } from 'projects/email-editor/src/public_api';

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
