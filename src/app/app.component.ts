import { Component, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'email-editor';

import sample from './sample.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-email-editor';

  options = {
  };

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;

  editorLoaded() {
    this.emailEditor.loadDesign(sample);
  }

  saveDesign() {
    this.emailEditor.saveDesign(
      (data) => console.log('saveDesign', data)
    );
  }

  exportHtml() {
    this.emailEditor.exportHtml(
      (data) => console.log('exportHtml', data)
    );
  }
}
