import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth : boolean = false;
  public username! : string;
  public password! : string;
  public token : string = '';

  constructor() { }

  logout() {
    this.auth = false;
    localStorage.clear();
  }
  login() {
    this.auth = true;
    localStorage.setItem('auth', this.auth.toString());
  }

  showSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
    return this.auth;
  }

  setSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
  }

  saveSession(username : string, password : string) {
    this.username = username;
    this.password = password;
  }

  getToken(username : string, password : string) : boolean {
    if (username == 'postman' && password == 'postman')
    {
      this.token = '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';
    }

    return (this.token != '');
  }

}
