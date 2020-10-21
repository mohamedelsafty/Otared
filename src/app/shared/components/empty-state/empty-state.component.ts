import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent implements OnInit {
  @Input() message:string;
  text:string =  " عفوا, لايوجد بيانات للعرض"
  constructor() { }

  ngOnInit(): void {
    if(this.message) this.text = this.message;
  }

}
