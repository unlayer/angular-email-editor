import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { loadScript } from './loadScript';
import pkg from './source.json';
import { Editor, UnlayerOptions, ToolsConfig, JSONTemplate } from '../types';

declare module unlayer {
  function init(object);
  function createEditor(object);
  function loadDesign(object);
  function saveDesign(Function);
  function exportHtml(Function);
}

let lastEditorId = 0;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css'],
})
export class EmailEditorComponent implements OnInit, AfterViewInit {
  @Input() editorId: string;
  @Input() options: UnlayerOptions = {};
  @Input() projectId: number;
  @Input() tools: ToolsConfig;
  @Input() appearance: object;
  @Input() locale: string;
  @Input() id: string;

  @Input() minHeight = '500px';

  @Output() loaded = new EventEmitter();
  @Output() ready = new EventEmitter();

  editor: Editor;

  constructor() {
    this.id = this.editorId || `editor-${++lastEditorId}`;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    loadScript(this.loadEditor.bind(this));
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

    this.editor = unlayer.createEditor({
      // ignore error
      ...options,
      id: this.id,
      displayMode: 'email',
      source: {
        name: pkg.name,
        version: pkg.version,
      },
    });

    this.loaded.emit({});

    this.editor.addEventListener('editor:ready', () => {
      this.ready.emit({});
    });
  }

  public loadDesign(data: JSONTemplate) {
    this.editor.loadDesign(data);
  }

  public saveDesign(cb: (data) => void) {
    this.editor.saveDesign(cb);
  }

  public exportHtml(cb: (data) => void) {
    this.editor.exportHtml(cb);
  }
}
