import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { ComplaintComponent } from './complaint.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';

@NgModule({
  declarations: [ComplaintComponent, AddComplaintComponent, ViewComplaintComponent],
  imports: [
    CommonModule,
    AppModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    FormsModule
  ]
})
export class ComplaintModule { }
