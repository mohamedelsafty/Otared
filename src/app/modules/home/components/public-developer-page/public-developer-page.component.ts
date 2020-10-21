import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchInstancesService } from 'src/app/shared/services/search-instances.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { CitiesService } from 'src/app/shared/services/city.service';

@Component({
  selector: 'app-public-developer-page',
  templateUrl: './public-developer-page.component.html',
  styleUrls: ['./public-developer-page.component.scss']
})
export class PublicDeveloperPageComponent implements OnInit {
targetId:number = null;
developerData;
isLoading:boolean =  true;
projectData;
sharedTarget:string;
  constructor(private route:ActivatedRoute, private citiesService:CitiesService, private searchInstancesService:SearchInstancesService, private httpService:HttpService) {
    this.targetId = this.route.snapshot.params["id"];
    this.route.data.subscribe(data =>{
      this.sharedTarget = data.sharedTarget;
  })
   }

  ngOnInit(): void {
    if(this.sharedTarget === 'developer' && this.targetId ){
      this.searchInstancesService.real_estate_developer_id = this.targetId;
      this.getDeveloper();
    }
    else if (this.sharedTarget === 'project' && this.targetId ){
      this.searchInstancesService.projectId = this.targetId;
      this.getProject()
    }
  }
  getProject(){
    this.isLoading = true;
    this.httpService.getAll('General/real-estate-developer/project-by-id/' + this.targetId).subscribe((res:any)=>{
      this.isLoading = false;
      this.projectData =  res.success;
    })
  }
  getDeveloper(){
    this.isLoading = true;
    this.httpService.getAll('General/real-estate-developer/personal-info/' + this.targetId).subscribe((res:any)=>{
      this.isLoading = false;
      this.developerData  =  res.success;
      this.citiesService.cities = res.success.city_list;
    })
  }
}
