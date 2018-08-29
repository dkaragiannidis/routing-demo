import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeslistComponent } from './employeeslist.component';

describe('EmployeeslistComponent', () => {
  let component: EmployeeslistComponent;
  let fixture: ComponentFixture<EmployeeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
