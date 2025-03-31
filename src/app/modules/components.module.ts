import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@shared/shared.module';
import { AboutComponent } from './about/about.component';
import { AboutItemComponent } from './about/about-item/about-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BoardsComponent } from './boards/boards.component';
import { OperationsModule } from './operations/operations.module';


@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
    AboutComponent,
    AboutItemComponent,
    BoardsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    OperationsModule
  ]
})
export class ComponentsModule { }
