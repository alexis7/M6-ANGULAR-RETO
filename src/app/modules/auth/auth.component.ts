import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MinValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State } from '@module/state/state';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loginForm: FormGroup;
  showError = false;

  constructor(private fb: FormBuilder, private router: Router, public state: State) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.get('usuario')?.value;
      const password = this.loginForm.get('password')?.value;
      if(usuario === 'bairon' && password === '98745612') {
        this.state.userEmail = 'baironnaranjo@gmail.com';
        this.state.token = '1';
        this.router.navigate(['/boards']);
      }else {
        this.showError = true;
      }
    } 
  }
}
