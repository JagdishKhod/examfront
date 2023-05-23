import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    email: '',
    password: null,
  }

  constructor(private adminService: AdminService){

  }

  formSubmit(){
    this.adminService.logIn(this.user).subscribe(res => {
      console.log(res);
    });

  }

}
