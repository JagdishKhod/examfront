import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AdminService } from "src/app/services/admin.service";
import { admin } from "src/app/shared/admin";
import Swal from "sweetalert2";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
	constructor(private adminService: AdminService, private _snack: MatSnackBar) {
	}

	public admin = {
		adminId: "",
		adminname: "",
		adminType: 2,
		adminEmail: "",
		adminPassword: "",
		adminPhone: "",

	};


	ngOnInit(): void {
	}

	formSubmit() {
		// Step 1: Retrieve the existing array from localStorage
		const existingArrayString = localStorage.getItem('userList');
		let existingArray: any[] = []; // Declare existingArray as a variable

// Check if the existing array already exists in localStorage
		if (existingArrayString) {
			existingArray = JSON.parse(existingArrayString);
		}

// Step 3: Add the new object to the existing array
		existingArray.push(...existingArray, this.admin);

// Step 4: Store the updated array back into localStorage
		localStorage.setItem('userList', JSON.stringify(existingArray));




		// const userList = [];
	  // userList.push(this.admin);
		// const existingArray = localStorage.getItem('myArray') || [];
		// existingArray.push(this.admin);
		// localStorage.setItem('userList', JSON.stringify(userList));

		// // debugger;
		// console.log(this.admin);
		// if (this.admin.adminname == "" || this.admin.adminname == null) {
		// 	// alert('Admin is Required !');
		// 	this._snack.open("Admin Name is required !", "ok", {
		// 		duration: 1000,
		// 		// verticalPosition:'top',
		// 		// horizontalPosition:'center'
		// 	});
		// 	return;
		// }
		// //addAdmin :adminService
		// this.adminService.addAdmin(this.admin).subscribe(
		// 	(data: any) => {
		// 		//succcess
		// 		console.log(data);
		// 		// alert('Successfull...');
		// 		Swal.fire("Successfully", "Admin name is Registered", "success");
		// 	},
		// 	(error) => {
		// 		//error
		// 		console.log(error);
		// 		//  alert('Something is Wrong');
		// 		Swal.fire("Error", "Something Went wrong", "warning");
		// 	}
		// );
	}

}
