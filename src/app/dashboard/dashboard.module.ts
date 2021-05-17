import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { EmailEditorModule } from 'angular-email-editor';

import { DashboardComponent } from './dashboard.component';
import { DesignListComponent } from './design-list/design-list.component';
import { DesignEditComponent } from './design-edit/design-edit.component';

@NgModule({
  declarations: [DashboardComponent, DesignListComponent, DesignEditComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EmailEditorModule
  ]
})
export class DashboardModule { }
