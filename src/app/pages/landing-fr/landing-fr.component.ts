import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-landing-fr',
  templateUrl: './landing-fr.component.html',
  styleUrls: ['../landing/landing.component.scss']
})
export class LandingFrComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-fr-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-fr-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  onClickOrder() {
  }
  onClickQuality() {
  }
}
