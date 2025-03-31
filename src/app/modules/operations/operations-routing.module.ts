import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsComponent } from './operations/operations.component';

const routes: Routes = [
  {
    path: 'operation',
    component: OperationsComponent,
    outlet: 'operation',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
