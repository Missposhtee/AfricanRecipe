import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { MatToolbarModule, MatButtonModule } from '@angular/material';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';


import { AuthService} from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { AfricanrecipeService } from './services/africanrecipe.service';



const routes =[
  { path: 'register', component: RegistrationComponent},
  { path: 'login',  component: LoginComponent },
  { path: '**', component :RegistrationComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
   AuthService,
   AfricanrecipeService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
