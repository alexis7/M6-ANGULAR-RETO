import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components.module').then(module => module.ComponentsModule),
  },
  {
    path: 'operations',
    loadChildren: () => import('./components.module').then(module => module.ComponentsModule),
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
