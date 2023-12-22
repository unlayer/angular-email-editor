import { Component, OnInit, ViewChild } from '@angular/core';

import sample from './sample.json';
import { EmailEditorComponent } from 'projects/email-editor/src/public_api';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit {
  options = {};

  constructor() {}

  ngOnInit() {}

  @ViewChild('editor')
  private emailEditor: EmailEditorComponent;

  editorLoaded(event) {
    console.log('editorLoaded');
    this.emailEditor.editor.loadDesign(sample);
  }

  editorReady() {
    console.log('editorReady');
  }

  editorUpdated(event) {
    console.log('editorUpdated',event)
  }

  saveDesign() {
    this.emailEditor.editor.saveDesign((data) =>
      console.log('saveDesign', data)
    );
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) =>
      console.log('exportHtml', data)
    );
  }
}
