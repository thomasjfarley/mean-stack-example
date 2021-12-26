import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component( {
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: [ './top-menu.component.css' ]
} )
export class TopMenuComponent implements OnInit {
  faBars = faBars;
  faUser = faUser;

  constructor () {
  }

  ngOnInit (): void {
  }

}
