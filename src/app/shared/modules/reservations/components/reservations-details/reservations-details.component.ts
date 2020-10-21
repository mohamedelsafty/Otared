import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from "moment";
import { PropertyTypeService } from 'src/app/shared/services/property-type.service';

@Component({
  selector: 'app-reservations-details',
  templateUrl: './reservations-details.component.html',
  styleUrls: ['./reservations-details.component.scss']
})
export class ReservationsDetailsComponent implements OnInit {
  target: string = "reservationsRequests"
  paramId: string;
  constructor(
    public reservationsService: ReservationsService,
    private route: ActivatedRoute,
    private router: Router,
    public propertyTypeService: PropertyTypeService,
  ) {
    this.route.data.subscribe(data =>{
      this.target = data.target;
  })
  this.paramId = this.route.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.reservationsService.findRecord(this.paramId, this.target);
  }
  getDate() {
    let data =  this.reservationsService.reservation;
    if(data.reservation_status === "open")
    return moment( data.created_at.split('t')[0], "YYYY-MM-DD").add(data.reservation_duration, 'days').format("YYYY-MM-DD");
    else 
    return moment( data.created_at.split('t')[0], "YYYY-MM-DD").format("YYYY-MM-DD");
   
  }

}
