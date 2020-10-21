import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyTypeService {
  isLoading: boolean = false;
  properties: Property[] = [];
  constructor(private httpService:HttpService) { }
  public findAll() {
    if(!this.properties.length && !this.isLoading){
      this.isLoading = true;
      this.httpService.getAll('get-all-property-type').subscribe((res: any)=>{
        this.properties = res.success;
        this.isLoading = false;
       })
    }
   
  }
  public findRecord(id:number){
    let record = this.properties.find((property:Property)=>property.id === id)
    if(record) return record;
    else return new Property();
  }
}
