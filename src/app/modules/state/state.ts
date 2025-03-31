import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class State {
  private _userEmail = new BehaviorSubject<string>('');
  private _users = new BehaviorSubject<string>('');
  private _token = new BehaviorSubject<string>('');
  private _typeTransation = new BehaviorSubject<number>(0);


  get typeTransation$(): Observable<number> {
    return this._typeTransation.asObservable();
  }

  set typeTransation(value: number) {
    this._typeTransation.next(value);
  }

  get userEmail$(): Observable<string> {
    return this._userEmail.asObservable();
  }

  set userEmail(value: string) {
    this._userEmail.next(value);
  }

  set token(value: string) {
    this._token.next(value);
  }

  set users(value: string) {
    this._users.next(value);
  }

  get token$(): Observable<string> {
    return this._token.asObservable();
  }

  get user$(): Observable<string> {
    return this._token.asObservable();
  }
  
}
