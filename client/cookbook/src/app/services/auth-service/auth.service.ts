import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModelDTO } from '../../models/login-model-dto';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  AUTH_SERVER = 'http://localhost:3000/api/user/login';


  constructor ( private httpClient: HttpClient ) {
  }

  logIn(loginForm: LoginModelDTO) {
    return this.httpClient.post( this.AUTH_SERVER, loginForm );
  }
}
