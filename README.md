# Angular Email Editor

The excellent drag-n-drop email editor by [Unlayer](https://unlayer.com) as a [Angular](https://angular.io/) *wrapper component*. This is the most powerful and developer friendly visual email builder for your app.

Video Overview |
:---: |
[![Angular Email Editor](https://s3.amazonaws.com/unroll-assets/unrollyoutube.png)](https://www.youtube.com/watch?v=MIWhX-NF3j8) |
*Watch video overview: https://youtu.be/MIWhX-NF3j8* |

## Live Demo

Check out the live demo here: https://angular-email-editor-demo.netlify.com/ ([Source Code](https://github.com/unlayer/angular-email-editor/tree/master/src))

## Installation

The easiest way to use React Email Editor is to install it from NPM and include it in your own Angular build process.

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
