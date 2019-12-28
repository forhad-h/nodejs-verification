import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData = localStorage.getItem('user')

  constructor () {}

  ngOnInit () {}

  isLoggedIn () {
    if (this.userData) {
      return true
    }
    return false
  }

  getUserData () {
    if (this.userData) {
      return JSON.parse(this.userData)
    }
  }
}
