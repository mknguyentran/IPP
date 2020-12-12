import { Component, OnInit } from "@angular/core";
import { HeaderTab, HEADER_TABS } from "./header.const";
// import header from './header.json';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  headerTabs: HeaderTab[] = HEADER_TABS;

  constructor() {}

  ngOnInit(): void {}
}
