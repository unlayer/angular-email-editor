import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'email-editor';

import sample from './sample.json';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  options = {
  };

  @ViewChild('editor')
  private emailEditor: EmailEditorComponent;

  constructor() { }

  ngOnInit() {
  }

  editorLoaded(event) {
    this.emailEditor.editor.loadDesign(sample);
  }

  saveDesign() {
    this.emailEditor.editor.saveDesign(
      (data) => console.log('saveDesign', data)
    );
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml(
      (data) => console.log('exportHtml', data)
    );
  }

}
