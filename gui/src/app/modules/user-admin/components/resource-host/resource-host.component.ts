import { Component, OnInit } from '@angular/core';
import { Resource } from '../../store/models';


@Component({
  selector: 'avam-resource-host',
  templateUrl: './resource-host.component.html',
  styles: []
})
export class ResourceHostComponent implements OnInit {
  isSingle = false;
  resourceId: number;
  


  constructor() { }

  ngOnInit() {
  }

  onNewOrEditResource(resourceId?: number) {
    this.resourceId = resourceId;
  }

}
