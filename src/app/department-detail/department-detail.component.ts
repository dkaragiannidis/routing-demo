import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      <a (click)="goPrevious()" >Previous</a>
      <a (click)="goNext()" >Next</a>
    </p>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
