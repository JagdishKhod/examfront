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
    // Step 1: Retrieve the existing array from localStorage
    const existingArrayString = localStorage.getItem('userList');
    let existingArray: any[] = []; // Declare existingArray as a variable

// Check if the existing array already exists in localStorage
    if (existingArrayString) {
      existingArray = JSON.parse(existingArrayString);
    }

    const emailExists = existingArray.some((obj: any) => obj.adminEmail === this.user.email);
    const passwordExists = existingArray.some((obj: any) => obj.adminPassword === this.user.password);

// Step 4: Output the result
    console.log(`Email "${this.user.email}" exists in the array: ${emailExists}`);
    if(emailExists && passwordExists){
      alert("Login successful");
    }else{
      alert("Login failed");
    }

    // this.adminService.logIn(this.user).subscribe(res => {
    //   console.log(res);
    // });

  }

}

