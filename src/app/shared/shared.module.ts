import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSubComponent } from './components/header-sub/header-sub.component';
import { ComponentsModule } from '@module/components.module';



@NgModule({
  declarations: [
    FooterComponent,
    AlertComponent,
    HeaderComponent,
    HeaderSubComponent
  ],
  exports: [
    FooterComponent,
    AlertComponent,
    HeaderComponent,
    HeaderSubComponent
  ],
  imports: [
    CommonModule
    ]
})
export class SharedModule { }
