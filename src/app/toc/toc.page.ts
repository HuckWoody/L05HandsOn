import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | The Beginning",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | The Journey",
      url: "/chapter2"
    }
  ];
  public pages = [
    {
      url: "/c1p1"
    },
    {
      url: "/c1p2"
    },
    {
      url: "/c2p1"
    },
    {
      url: "/c2p2"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
