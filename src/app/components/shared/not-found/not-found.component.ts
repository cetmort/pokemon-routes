import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(public authService : AuthService) { 
    
  }

  ngOnInit(): void {
  }
  login(){
    this.authService.login();
  }
  loginout(){
    this.authService.loginout();
  }
  
  showSession(){
    return this.authService.showSession();
  }
  
}
