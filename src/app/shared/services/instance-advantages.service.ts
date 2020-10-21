import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { InstanceAdvantage } from '../models/instance-advantage.model';

@Injectable({
  providedIn: 'root'
})
export class InstanceAdvantagesService {
  isLoading: boolean = false;
  advantages: InstanceAdvantage[] = [];
  constructor(private httpService:HttpService) { }
  public findAll() {
    if(!this.advantages.length && !this.isLoading){
      this.isLoading = true;
      this.httpService.getAll('Advantage-List').subscribe((res: any)=>{
        this.advantages = res.data;
        this.isLoading = false;
       })
    }
   
  }
  public findRecord(id:number){
    let record = this.advantages.find((category:InstanceAdvantage)=>category.id === id)
    if(record) return record;
    else return new InstanceAdvantage();
  }
}