import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  isLogInUser: boolean = false;
  isHome: boolean = false;

  constructor(private router: Router){

  }
  ngOnInit() {
    const isLogedIn = localStorage.getItem('isLoggedIn');
    if(isLogedIn === 'true') {
      this.isLogInUser = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  logOut(){
    this.isLogInUser = false;
    this.router.navigate(['/login'])
    window.location.reload();
    localStorage.setItem('isLoggedIn', "false");

  }

}
