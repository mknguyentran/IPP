import { Component, OnInit } from '@angular/core';
import { HeaderField, HEADER_FIELDS } from './header.const';
import header from './header.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerFields: HeaderField[] = HEADER_FIELDS;
  constructor() {}

  ngOnInit(): void {}
}
