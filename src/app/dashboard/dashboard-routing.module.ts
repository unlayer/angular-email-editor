import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DesignListComponent } from './design-list/design-list.component';
import { DesignEditComponent } from './design-edit/design-edit.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DesignListComponent },
      { path: 'new', component: DesignEditComponent },
      { path: 'edit/:designId', component: DesignEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
