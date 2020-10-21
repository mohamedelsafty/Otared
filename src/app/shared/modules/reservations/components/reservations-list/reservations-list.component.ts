import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { PropertyTypeService } from 'src/app/shared/services/property-type.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.scss']
})
export class ReservationsListComponent implements OnInit{

  displayedColumns: string[] = [
    "instances_id",
    "project_name",
    "instance_name",
    "symbol",
    "project_type",
    "client",
    "reservation_duration",
    "action",
  ];
  target: string = "reservationsRequests"
  constructor(
    public reservationsService:ReservationsService,
    public propertyTypeService: PropertyTypeService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.route.data.subscribe(data =>{
        this.target = data.target;
    })
  }

  ngOnInit() {
    this.reservationsService.reset();
    this.reservationsService.findAll(1, this.target);
    this.propertyTypeService.findAll();
  }
  goReservations(){
    if(this.target === 'reservationsRequests')
    this.router.navigate(['accepted'], {relativeTo: this.route});
    else
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  show(id){
    this.router.navigate(['show', id], {relativeTo: this.route});
  }
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.reservationsService.search(event.target.value, this.target);
    }
  }
}
