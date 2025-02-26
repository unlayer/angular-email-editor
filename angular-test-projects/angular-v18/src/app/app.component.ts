import { Component, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-email-editor';

  @ViewChild(EmailEditorComponent)
  private emailEditor!: EmailEditorComponent;

  private get unlayer() {
    return this.emailEditor.editor;
  }

  // called when the editor is created
  editorLoaded() {
    console.log('editorLoaded');
    // load the design json here
    // you can get the design json by calling unlayer.exportHtml (see below)
    // this.unlayer.loadDesign({ /* json object here */ });
  }

  // called when the editor has finished loading
  editorReady() {
    console.log('editorReady');
  }

  exportHtml() {
    this.unlayer.exportHtml((result) => {
      // result object format: { html: string, design: object, amp: object, chunks: object }
      console.log('exportHtml', result);
    });
  }
}
