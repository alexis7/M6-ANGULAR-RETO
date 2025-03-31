import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { State } from "@module/state/state";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router, public state: State) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.state.token;
    this.state.token$.subscribe((value) => {
      token = value
    });
    if (token == '1') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
