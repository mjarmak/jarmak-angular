import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const track = routeParams.get('track');
    if (track) {
      window.location.href='https://open.spotify.com/track/5gEACOU2ChQemSm9QHuprH?si=cd09557cf8dc416b';
    }
  }

}
