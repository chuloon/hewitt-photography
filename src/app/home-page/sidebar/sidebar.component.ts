import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navItems = [
    { label: "Weddings", link: "" },
    { label: "Engaged", link: "" },
    { label: "Families", link: "" },
    { label: "Events", link: "" },
    { label: "Blog", link: "" },
    { label: "About", link: "" },
    { label: "Contact", link: "" },
    { label: "Client Access", link: "" }
  ];

  constructor() { }

  ngOnInit() {
  }

  navItemClick = (link) => {
    console.log("navItem clicked: ", link);
  }
}
