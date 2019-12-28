import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'

import { SigninService } from './signin.service'
import { SigninData } from './signin.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor (private signinService: SigninService, private route: Router) {}

  ngOnInit () {}
  onSignin (form: NgForm) {
    if (form.invalid) {
      return false
    }
    const data: SigninData = {
      email: form.value.email,
      password: form.value.password
    }
    this.signinService.authenticate(data).subscribe(res => {
      if (res.token) {
        localStorage.setItem('user', JSON.stringify(res))
        form.resetForm()
        this.route.navigate(['/dashboard'])
      }
    })
  }
}
