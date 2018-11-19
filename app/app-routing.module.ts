import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fileupload', component: FileuploadComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  declarations: [FileuploadComponent,DashboardComponent], 
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
 