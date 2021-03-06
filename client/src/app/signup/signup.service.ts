import { Injectable } from '@angular/core'
import { SignupData } from './signup.model'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private readonly ROOT_URL = 'http://localhost:4500/signup'

  constructor (private http: HttpClient) {}

  addUser (signupData: SignupData): Observable<SignupData> {
    // TODO: Handle error
    return this.http.post<SignupData>(this.ROOT_URL, signupData)
  }
}
