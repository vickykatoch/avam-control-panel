import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'avam-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  selected = false;

  constructor() {
  }

  ngOnInit() {
  }
}
