import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-departementlist',
  template: `
    
     <a (click)="onSelect(department)" *ngFor="let depatment of department">
     {{depatment.id}} {{depatment.name}}
     </a>
    
  `,
  styles: []
})
export class DepartementlistComponent implements OnInit {
  department=[
    {"id":"1","name":"anqular"},
    {"id":"2","name":"mongo"},
    {"id":"3","name":"php"}
  ]
  constructor(private route: Router) { }
 
  ngOnInit() {
  }
onSelect(depatment){
  this.route.navigate(['/departments',depatment.id]);
}
}
