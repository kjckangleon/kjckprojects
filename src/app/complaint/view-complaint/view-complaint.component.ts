import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ComplaintService } from '../complaint.service';
import { Complaint } from 'src/app/model/complaint.model';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent implements OnInit {
  subscriber = new Subscriber();
  complaint: Complaint;
  isDone: boolean = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private complaintService: ComplaintService) { }

  ngOnInit() {
    this.initialize();
  }

  private initialize() {
    let complaintId = this.activatedRoute.snapshot.paramMap.get('id');
    this.complaintService.getComplaintById(complaintId).subscribe((value: any) => {
     this.complaint = value.data();
   }, (error) => {
      
   }, () => {
     this.isDone = true;
   })
  }
}
