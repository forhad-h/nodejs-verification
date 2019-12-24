import { Component, OnInit } from '@angular/core'
import {
  NgForm,
  FormControl,
  FormGroupDirective,
  Validators
} from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core'

/** Error when invalid control is dirty, touched or submitted */
export class SignupErrorStateMatcher implements ErrorStateMatcher {
  isErrorState (
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    )
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ])

  matcher = new SignupErrorStateMatcher()

  constructor () {}

  ngOnInit () {}

  onSignUp (form: NgForm) {
    if (form.invalid) {
      return false
    }
    const name = form.value.name
    const email = form.value.email
    const password = form.value.password
    const confirmPassword = form.value.confirmPassword
  }
}
