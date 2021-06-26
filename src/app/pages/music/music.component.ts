import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tracksSpotify } from 'src/tracks/tracks-spotify';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const track = routeParams.get('track');
    const url = tracksSpotify.get(track)
    if (url) {
      window.location.href=url;
    }
  }

}
