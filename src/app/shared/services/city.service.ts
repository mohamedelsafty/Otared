import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { City } from '../models/City.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  isLoading: boolean = false;
  cities: City[] = [];
  constructor(private httpService:HttpService) { }
  public findAll() {
    if(!this.cities.length && !this.isLoading){
      this.isLoading = true;
      this.httpService.getAll('get-all-cities').subscribe((res: any)=>{
        this.cities = res.success;
        this.isLoading = false;
       })
    }
   
  }
  public findRecord(id:number){
    let record = this.cities.find((city:City)=>city.id == id)
    if(record) return record;
    else return new City();
  }
}