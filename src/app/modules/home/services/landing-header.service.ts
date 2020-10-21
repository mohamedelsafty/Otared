
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
export class LandingHeaderConfig {
    position: string = "relative";
    theme: string = "dark";
}

@Injectable({
  providedIn: "root",
})
export class LandingHeaderService {
    constructor(){}
    headerConfig: BehaviorSubject<LandingHeaderConfig> = new BehaviorSubject(new LandingHeaderConfig());
    set(config: LandingHeaderConfig){
        this.headerConfig.next(config);
    }
    reset(){
        this.headerConfig.next(new LandingHeaderConfig());
    }
}