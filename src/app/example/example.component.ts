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
    version: 'latest',
  };
  scriptUrl = 'https://editor.unlayer.com/embed.js?2';

  constructor() {}

  ngOnInit() {}

  @ViewChild('editor')
  private emailEditor!: EmailEditorComponent;

  private get unlayer() {
    return this.emailEditor.editor;
  }

  // called when the editor is created
  editorLoaded() {
    console.log('editorLoaded');
    this.unlayer.loadDesign(sample);
  }

  // called when the editor has finished loading
  editorReady() {
    console.log('editorReady');
  }

  saveDesign() {
    this.unlayer.saveDesign((data) =>
      console.log('saveDesign', data)
    );
  }

  exportHtml() {
    this.unlayer.exportHtml((result) => {
      // result object format: { html: string, design: object, amp: object, chunks: object }
      console.log('exportHtml', result);
    });
  }
}
