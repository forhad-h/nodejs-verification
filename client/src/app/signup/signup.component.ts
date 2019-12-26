import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {
  NgForm,
  FormControl,
  FormGroupDirective,
  Validators
} from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core'

import { SignupData } from './signup.model'
import { SignupService } from './signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  posts: any

  constructor (private signupService: SignupService) {}

  ngOnInit () {}

  onSignUp (form: NgForm) {
    if (form.invalid) {
      return false
    }
    const name = form.value.name
    const email = form.value.email
    const password = form.value.password
    const confirmPassword = form.value.confirmPassword

    const data: SignupData = {
      name,
      email,
      password,
      confirmPassword
    }
    this.signupService.addUser(data).subscribe(res => console.log(res))
  }
}
