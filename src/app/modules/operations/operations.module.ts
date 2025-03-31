import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './operations/operations.component';
import { HistoryComponent } from './history/history.component';
import { TransationComponent } from './transation/transation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OperationsComponent,
    HistoryComponent,
    TransationComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    OperationsComponent,
    HistoryComponent,
    TransationComponent
  ],
})
export class OperationsModule { }
