import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from '../../services/http.service';
import { Property } from '../../models/property.model';
import { PropertyTypeService } from '../../services/property-type.service';

@Component({
  selector: "sample-card",
  templateUrl: "./sample-card.component.html",
  styleUrls: ["./sample-card.component.scss"],
})
export class SampleCardComponent implements OnInit {
  @Input() cardData;
  data;
  isLoading :boolean = false;
  properties:Property[] = [];
  constructor(private httpService:HttpService, public propertyTypeService: PropertyTypeService) {
    this.propertyTypeService.findAll();
  }


  ngOnInit() {
    this.isLoading = true;
    if(!this.cardData.instance && this.cardData.instance_id){
        this.httpService.getAll('Utility/Instance/' + this.cardData.instance_id + "?counter=0").subscribe((res:any)=>{
          this.data = {}
          this.isLoading = false;
          this.data.instance = res.data
        })
    }
    else{
      this.isLoading = false;
    }
  }
}
