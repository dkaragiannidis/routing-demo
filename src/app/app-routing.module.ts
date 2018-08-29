import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartementlistComponent } from './departementlist/departementlist.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  {path:'',redirectTo:"/depatments",pathMatch:'full'},
  {path:"depatments",component:DepartementlistComponent},
  {path:"department/:id", component:DepartmentDetailComponent},
  {path:"employees",component:EmployeeslistComponent},
  {path:"**",component:PageNotFoundComponent}
]
 ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets=[DepartementlistComponent,EmployeeslistComponent,PageNotFoundComponent,DepartmentDetailComponent]