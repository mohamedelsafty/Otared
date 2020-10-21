import { Component, OnInit } from "@angular/core";
import { VisitsService } from "../../services/visits.service";
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: "visit-requests-list",
  templateUrl: "./visit-requests-list.component.html",
  styleUrls: ["./visit-requests-list.component.scss"],
})
export class VisitRequestsListComponent implements OnInit {

  constructor(
    public visitsService: VisitsService,
    private router: Router,
    private route: ActivatedRoute,
    public auth: AuthService
  ) {}

  displayedColumns: string[] = [
    "id",
    "projectName",
    "instancesName",
    "unitStatus",
    "clientName",
    "clientPhone",
    "status",
    "action",
  ];
  ngOnInit() {
    this.visitsService.findAll();
  }
  show(id){
    this.router.navigate(['show', id], {relativeTo: this.route});
  }
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.visitsService.search(event.target.value)
    }
  }



}
