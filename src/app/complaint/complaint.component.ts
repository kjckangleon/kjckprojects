import { Component, OnInit } from '@angular/core';
import { ComplaintService } from './complaint.service';
import { Complaint } from '../model/complaint.model';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  complaint: Complaint[];
  subscriber =  new Subscriber();
  constructor(private complaintService: ComplaintService, private router: Router){}

  ngOnInit() {
    this.subscriber.add(
      this.complaintService.getComplaint().subscribe(data => {
      this.complaint = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Complaint;
      })
    }));
  }

  deleteComplaint(id: any) {
    this.complaintService.deleteComplaint(id);
  }

  viewComplaint(id: any) {
    this.router.navigate([`/view-complaint/${id}`]);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
