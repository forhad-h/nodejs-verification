import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SigninData } from './signin.model'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  constructor (private http: HttpClient) {}

  authenticate (signinData: SigninData): Observable<SigninData> {
    // TODO: Handle error
    return this.http.post<SigninData>(
      `${environment.APIEndpoint}/signin`,
      signinData
    )
  }
}
