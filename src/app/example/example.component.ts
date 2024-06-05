import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'email-editor';

import sample from './sample.json';

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
  private emailEditor: EmailEditorComponent | undefined;

  editorLoaded(event: any) {
    console.log('editorLoaded');
    this.emailEditor?.editor.loadDesign(sample);
  }

  editorReady(event: any) {
    console.log('editorReady');
  }

  saveDesign() {
    this.emailEditor?.editor.saveDesign((data: any) =>
      console.log('saveDesign', data)
    );
  }

  exportHtml() {
    this.emailEditor?.editor.exportHtml((data: any) =>
      console.log('exportHtml', data)
    );
  }
}
