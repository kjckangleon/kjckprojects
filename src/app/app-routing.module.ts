import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintComponent } from './complaint/complaint.component';
import { AddComplaintComponent } from './complaint/add-complaint/add-complaint.component';
import { ViewComplaintComponent } from './complaint/view-complaint/view-complaint.component';
import { JejemonConverterComponent } from './jejemon-converter/jejemon-converter.component';

const routes: Routes = [
  { path: '', redirectTo: '/jeje', pathMatch: 'full' },
  { path: 'complaint', component: ComplaintComponent},
  { path: 'add-complaint', component: AddComplaintComponent},
  { path: 'view-complaint/:id', component: ViewComplaintComponent},
  { path: 'jeje', component: JejemonConverterComponent}
 ];
  
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}