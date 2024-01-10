import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { DesignListComponent } from './design-list/design-list.component';
import { DesignEditComponent } from './design-edit/design-edit.component';
import { EmailEditorModule } from 'projects/email-editor/src/public_api';

@NgModule({
  declarations: [DashboardComponent, DesignListComponent, DesignEditComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EmailEditorModule
  ]
})
export class DashboardModule { }
