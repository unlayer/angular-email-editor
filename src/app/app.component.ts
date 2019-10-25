import { Component, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'email-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-email-editor';

  options = {
    templateId: 59,
  };

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;

  exportHtml() {
    this.emailEditor.exportHtml((data) => console.log('exportHtml', data));
    this.emailEditor.saveDesign((data) => console.log('saveDesign', data));
  }
}
