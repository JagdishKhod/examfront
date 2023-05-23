import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  emp:any;
  p:number=1;
  term:any;
 
  constructor(private _globalSer:AdminService){}
    ngOnInit(){
      // this.fetchData();
    }

   
    
    // fetchData(){
    //   this._globalSer.getRecord("").subscribe((res:any)=>{
    //     // console.log(res);
        
    //     this.emp=res;
    //     //console.log(this.emp);
    //   })
    // }
    getId(id:any){
    //   // console.log(id);
    //   if(confirm(`Are you sure to delete record with id:${id}`)){

    //     this._globalSer.deleteRecord("employee",id).subscribe(()=>{
    //       window.alert("Record Deleted Successfully");
    //       this.fetchData();
    //     });
    //   }
    }

}





 