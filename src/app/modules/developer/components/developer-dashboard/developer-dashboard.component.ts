import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpService } from 'src/app/shared/services/http.service';
export class DevDashbord {
  instances: number = 0;
  instances_unit: number = 0;
  projects: number = 0;
  reservation: number = 0;
  reservationrequest: number = 0;
  sold_out_instances_unit: number = 0;
  visitrequest: number = 0;
}
@Component({
  selector: 'app-developer-dashboard',
  templateUrl: './developer-dashboard.component.html',
  styleUrls: ['./developer-dashboard.component.css']
})

export class DeveloperDashboardComponent implements OnInit {
  isloading: boolean; 
  dashboard: DevDashbord = new DevDashbord();
  constructor(
    public auth: AuthService,
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    if(this.auth.getUser().account_status === 'accepted'){
      this.getDashboard();
    }
  }
  getDashboard(){
    this.isloading = true;
    this.httpService.getAll('real-estate-developer/dashboard').subscribe((res:any)=>{
      if(res && res.success){
        this.dashboard = res.success;
        this.isloading = false;
      }
    })
  }
}
