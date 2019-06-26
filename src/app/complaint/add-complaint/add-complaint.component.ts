import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComplaintService } from '../complaint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {
  complaintForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private complaintService: ComplaintService,
     private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.complaintForm = this.formBuilder.group({
      name: [''],
      family_name: [''],
      address: [''],
      date_and_time: [''],
      complaint: ['']
    })
  }

  submit() {
    this.complaintService.createComplaint(this.complaintForm.value).finally(()=> {
      this.router.navigateByUrl("/complaint");
    });
  }

}
