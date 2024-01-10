import { EmailEditorModule } from './../../../projects/email-editor/src/lib/email-editor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';

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
