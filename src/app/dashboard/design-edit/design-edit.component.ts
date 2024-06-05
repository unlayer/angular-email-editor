import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'email-editor';

@Component({
  selector: 'app-design-edit',
  templateUrl: './design-edit.component.html',
  styleUrls: ['./design-edit.component.css'],
})
export class DesignEditComponent implements OnInit {
  options = {};

  constructor() {}

  ngOnInit() {}

  @ViewChild('editor')
  private emailEditor: EmailEditorComponent | undefined;

  editorLoaded(event: any) {
    console.log('editorLoaded');
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
