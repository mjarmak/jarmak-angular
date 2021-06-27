import { Component, OnInit } from '@angular/core';
import { linksSocial } from 'src/links/links-social';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  public links = linksSocial;

  constructor() { }

  ngOnInit(): void {
  }

  getKeys(map){
      return Array.from(map.keys());
  }

}
