import { Component, ViewChild, OnInit } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-email-editor';

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;

  ngOnInit(): void {
      
  }
  // called when the editor is created
  editorLoaded($event) {
    console.log('editorLoaded');
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  // called when the editor has finished loading
  editorReady($event) {
    console.log('editorReady');
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) =>
      console.log('exportHtml', data)
    );
  }
}