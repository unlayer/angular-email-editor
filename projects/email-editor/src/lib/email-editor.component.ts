import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

declare module unlayer {
  function init(object);
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css']
})
export class EmailEditorComponent implements OnInit, AfterViewInit {

  @Input() projectId: number;
  @Input() templateId: number;

  constructor() { }

  ngOnInit() {
    const unlayerScript = document.createElement('script');
    unlayerScript.setAttribute('src', '//editor.unlayer.com/embed.js');
    unlayerScript.onload = () => {
      this.loadEditor();
    };
    document.head.appendChild(unlayerScript);
  }

  ngAfterViewInit() {
  }

  protected loadEditor() {
    unlayer.init({
      id: 'editor',
      projectId: this.projectId,
      templateId: this.templateId,
      displayMode: 'email',
    });
  }

}
