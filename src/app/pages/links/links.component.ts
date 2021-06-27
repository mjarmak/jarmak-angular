import { Component, OnInit } from '@angular/core';
import { linksSocial } from 'src/links/links-social';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  public links = linksSocial;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  getKeys(map){
      return Array.from(map.keys());
  }

}
