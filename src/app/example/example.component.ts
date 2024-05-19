import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'email-editor';

import sample from './sample.json';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit {
  options = {
    appearance: {
      theme: 'modern_light',
    },
  };

  constructor() {}

  ngOnInit() {}

  @ViewChild('editor')
  private emailEditor: EmailEditorComponent;

  editorLoaded() {
    this.emailEditor.editor.addEventListener('design:loaded', () => {
      console.log('design:loaded', this.emailEditor.editor);
    });
    this.emailEditor.editor.loadDesign(sample);
  }

  editorReady() {
    console.log('editorReady', this.emailEditor.editor);
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
