import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '@module/state/state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems = ["Personas", "Negocios", "Corporativos", "Negocios especializados", "Tu360", "Blog"]

      constructor(private router: Router, public state: State) {
        this.state.userEmail$.subscribe((value) => {
          console.log('Nuevo valor:', value);
          this.menuItems.push(value);
          if(value){
            this.menuItems = this.menuItems.filter(item => item !== "Negocios especializados");
          }
        });
      }

      redirectToLogin(){
        this.router.navigate(['/login']);
      }
}
