import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { linksSpotify } from 'src/links/links-spotify';

@Component({
  selector: 'app-music',
  templateUrl: './music-redirect.component.html',
  styleUrls: ['./music-redirect.component.css']
})
export class MusicRedirectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const track = routeParams.get('track');
    const url = linksSpotify.get(track)
    if (url) {
      window.location.href=url;
    }
  }

}
