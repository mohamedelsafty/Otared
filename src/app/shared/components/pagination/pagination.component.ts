import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() page:number;
  @Input() total:number;
  @Input() perPage:number;
  @Output() change = new EventEmitter();
  // totalPages: number;
  // currentPage: number;
  // paginationArr: number[];

  constructor(
  ) {
   
   }

  ngOnInit(): void {
    // this.currentPage = this.page || 1 ;
    // this.totalPages =  Math.ceil(this.total / this.perPage);
    // this.paginationArr = [];
    // for (let index = 0; index < this.totalPages; index++) {
    //   this.paginationArr.push(index + 1);
    // }
  }
  pageChange(pagination){
    this.change.emit(pagination.pageIndex + 1);
  }

}
