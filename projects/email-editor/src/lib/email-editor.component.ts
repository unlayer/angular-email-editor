import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

declare module unlayer {
  function init(object);
  function loadDesign(object);
  function saveDesign(Function);
  function exportHtml(Function);
}

export interface UnlayerOptions {
  projectId?: number;
  tools?: object;
  appearance?: object;
  locale?: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css']
})
export class EmailEditorComponent implements OnInit, AfterViewInit {

  @Input() options: UnlayerOptions = {};
  @Input() projectId: number;
  @Input() tools: object;
  @Input() appearance: object;
  @Input() locale: string;

  @Input() minHeight = '500px';

  @Output() loaded = new EventEmitter();

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
    const options: UnlayerOptions = this.options || {};

    if (this.projectId) {
      options.projectId = this.projectId;
    }

    if (this.tools) {
      options.tools = this.tools;
    }

    if (this.appearance) {
      options.appearance = this.appearance;
    }

    if (this.locale) {
      options.locale = this.locale;
    }

    unlayer.init({
      ...options,
      id: 'editor',
      displayMode: 'email',
    });

    this.loaded.emit({});
  }

  public loadDesign(data: object) {
    unlayer.loadDesign(data);
  }

  public saveDesign(cb: (data: object) => void) {
    unlayer.saveDesign(cb);
  }

  public exportHtml(cb: (data: object) => void) {
    unlayer.exportHtml(cb);
  }

}
