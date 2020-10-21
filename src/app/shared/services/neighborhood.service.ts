import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Neighborhood } from '../models/neighborhood.model';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodsService {
  isLoading: boolean = false;
  neighborhoods: Neighborhood[] = [];
  constructor(private httpService:HttpService) { }
  public findAllByCityId(cityId:number) {
    if(!this.neighborhoods.length && !this.isLoading){
      this.isLoading = true;
      this.httpService.getAll('get-neighborhoods-by-city?city_id=' + cityId).subscribe((res: any)=>{
        this.neighborhoods = res.success;
        this.isLoading = false;
       })
    }
   
  }
  public findRecord(id:number){
    let record = this.neighborhoods.find((neighborhood:Neighborhood)=>neighborhood.id === id)
    if(record) return record;
    else return new Neighborhood();
  }
}