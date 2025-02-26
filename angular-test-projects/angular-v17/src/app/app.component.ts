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
  private emailEditor: EmailEditorComponent;

  // called when the editor is created
  editorLoaded() {
    console.log('editorLoaded');
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  // called when the editor has finished loading
  editorReady() {
    console.log('editorReady');
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) =>
      console.log('exportHtml', data)
    );
  }
}
