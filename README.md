# Angular Email Editor

The excellent drag-n-drop email editor by [Unlayer](https://unlayer.com) as a [Angular](https://angular.io/) *wrapper component*. This is the most powerful and developer friendly visual email builder for your app.

Video Overview |
:---: |
[![Angular Email Editor](https://s3.amazonaws.com/unroll-assets/unrollyoutube.png)](https://www.youtube.com/watch?v=MIWhX-NF3j8) |
*Watch video overview: https://youtu.be/MIWhX-NF3j8* |

## Live Demo

Check out the live demo here: https://angular-email-editor-demo.netlify.com/ ([Source Code](https://github.com/unlayer/angular-email-editor/tree/master/src))

## Installation

The easiest way to use Angular Email Editor is to install it from Npm or Yarn and include it in your own Angular build process.

```
npm install angular-email-editor --save
```

## Usage

Next, you'll need to import the Email Editor module in your app's module.

**app.module.ts**

```ts

import { EmailEditorModule } from 'angular-email-editor';
...

@NgModule({
  ...
  imports: [ EmailEditorModule ],
  ...
});
```

**app.component.ts**

```ts
import { Component, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-email-editor';

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;

  exportHtml() {
    this.emailEditor.exportHtml((data) => console.log('exportHtml', data));
  }
}
```

**app.component.html**

```html
<div class="container">
  <button (click)="exportHtml()">Export</button>
  <email-editor (load)="editorLoaded($event)"></email-editor>
</div>
```

### Properties

* `minHeight` `String` minimum height to initialize the editor with (default 500px)
* `options` `Object` options passed to the Unlayer editor instance (default {})
* `tools` `Object` configuration for the built-in and custom tools (default {})
* `appearance` `Object` configuration for appearance and theme (default {})
* `projectId` `Integer` Unlayer project ID (optional)
* `loaded` `Function` called when the editor has finished loading

See the [Unlayer Docs](https://docs.unlayer.com/) for all available options.

### Methods

* `loadDesign` - `function(Object data)` - Takes the design JSON and loads it in the editor
* `saveDesign` - `function(Function callback)` - Returns the design JSON in a callback function
* `exportHtml` - `function(Function callback)` - Returns the design HTML and JSON in a callback function

See the [example source](https://github.com/unlayer/react-email-editor/blob/master/demo/src/index.js) for a reference implementation.

## Custom Tools

Custom tools can help you add your own content blocks to the editor. Every application is different and needs different tools to reach it's full potential. [Learn More](https://docs.unlayer.com/docs/custom-tools)

[![Custom Tools](https://unlayer.com/assets/images/features/custom_tools.png)](https://docs.unlayer.com/docs/custom-tools)


## Localization

You can submit new language translations by creating a PR on this GitHub repo: https://github.com/unlayer/translations. Translations managed by [PhraseApp](https://phraseapp.com)

### License

Copyright (c) 2019 Unlayer. [MIT](LICENSE) Licensed.
