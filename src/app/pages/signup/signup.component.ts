import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';
import { admin } from 'src/app/shared/admin';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private adminService:AdminService,private _snack:MatSnackBar) {}

public admin = {
  adminId:'',
  adminname:'',
  adminType: 2,
  adminEmail:'',
  adminPassword:'',
  adminPhone:'',

}


  ngOnInit(): void {}
    
    formSubmit ()
    {
      debugger;
      console.log(this.admin);
      if(this.admin.adminname=='' || this.admin.adminname==null)
      {
        // alert('Admin is Required !');
        this._snack.open("Admin Name is required !",'ok',{
          duration:2000,
          // verticalPosition:'top',
          // horizontalPosition:'center'
        });
        return;
      }
      //addAdmin :adminService
      this.adminService.addAdmin(this.admin).subscribe(
       (data:any)=>{
        //succcess
        console.log(data);
        // alert('Successfull...');
        Swal.fire('Successfully', 'Admin name is Registered','success')
       },
       (error) => {
         //error
         console.log(error);
        //  alert('Something is Wrong');
        Swal.fire('Error','Something Went wrong','warning')
       }
       );
    }
  
}
