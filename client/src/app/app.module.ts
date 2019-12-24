import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
} from '@angular/material'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SignupComponent } from './signup/signup.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SigninComponent } from './signin/signin.component'
import { NavigationComponent } from './navigation/navigation.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
