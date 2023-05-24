import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PageOneComponent } from './tutorials/page-one/page-one.component';
import { PageTwoComponent } from './tutorials/page-two/page-two.component';
import { PageThreeComponent } from './tutorials/page-three/page-three.component';
import { PageFourComponent } from './tutorials/page-four/page-four.component';
import { PageFiveComponent } from './tutorials/page-five/page-five.component';
import { PageSixComponent } from './tutorials/page-six/page-six.component';
import { ContextComponent } from './tutorials/context/context.component';
//import { EnvironmentComponent } from './environment/environment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    AboutComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    PageSixComponent,
    ContextComponent,
  //  EnvironmentComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
   HttpClientModule,
   MatSnackBarModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
