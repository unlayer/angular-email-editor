import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmailEditorModule } from 'email-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmailEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
