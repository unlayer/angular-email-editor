import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'email-editor';

@Component({
  selector: 'app-design-edit',
  templateUrl: './design-edit.component.html',
  styleUrls: ['./design-edit.component.css']
})
export class DesignEditComponent implements OnInit {

  options = {
  };


  @ViewChild('editor')
  private emailEditor: EmailEditorComponent;

  constructor() { }

  ngOnInit() {
  }

  editorLoaded(event) {
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
