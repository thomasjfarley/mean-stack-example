import { Component, OnInit } from '@angular/core';
import { LoginModelDTO } from '../../models/login-model-dto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
} )
export class LoginComponent implements OnInit {
  loginInfo: LoginModelDTO = new LoginModelDTO();
  loginForm: FormGroup;

  constructor ( private fb: FormBuilder, private authService: AuthService ) {
  }

  ngOnInit (): void {
    this.createAndWatchForms();
    console.log( this.loginForm.controls );
  }

  createAndWatchForms () {
    this.loginForm = new FormGroup( {} );
    for ( const key of Object.keys( this.loginInfo ) ) {
      this.loginForm.addControl( key, this.fb.control( this.loginInfo[ key as keyof LoginModelDTO ] ) );
    }

    this.loginForm.valueChanges.subscribe( change => {
      for ( const prop of Object.keys( change ) ) {
        if ( this.loginInfo.hasOwnProperty( prop ) ) {
          this.loginInfo[ prop as keyof LoginModelDTO ] = change[ prop ];
        }
      }
    } );
  }

  login () {
    this.authService.logIn( this.loginInfo ).subscribe( res => {
      console.log( res );
    } );
  }
}
