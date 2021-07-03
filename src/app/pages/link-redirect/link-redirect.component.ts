import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { linksSocial } from 'src/links/links-social';

@Component({
  selector: 'app-link-redirect',
  templateUrl: './link-redirect.component.html',
  styleUrls: ['./link-redirect.component.css']
})
export class LinkRedirectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const link = routeParams.get('link');
    const url = linksSocial.get(link)
    if (url) {
      window.location.href=url;
    } else {
      window.location.href='';
    }
  }
}
