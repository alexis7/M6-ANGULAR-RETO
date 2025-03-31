import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '@module/state/state';

@Component({
  selector: 'app-header-sub',
  templateUrl: './header-sub.component.html',
  styleUrls: ['./header-sub.component.css']
})
export class HeaderSubComponent {
  menuItems = ["Inicio", "Necesidades", "Productos y Servicios", "Educación Financiera"]

    constructor(private router: Router, public state: State) {
      this.state.userEmail$.subscribe((value) => {
        console.log('Nuevo valor:', value);
      });
    }

    redirectToLogin() {
      window.open('/login', '_blank');
    }
  
}
