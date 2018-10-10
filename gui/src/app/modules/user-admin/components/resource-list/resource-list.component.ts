import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ResourceService } from '../../services';
import { Resource } from '../../store/models';

@Component({
  selector: 'avam-resource-list',
  templateUrl: './resource-list.component.html',
  styles: []
})
export class ResourceListComponent implements OnInit {

  @Output() selected = new EventEmitter<number|undefined>();
  resources : Resource[] =[];
  isBz = true;

  constructor(private resxService: ResourceService) { }

  ngOnInit() {
    this.loadResources();
  }
  loadResources() {
    this.resources=[];
    this.resxService.fetchAll()
      .subscribe(resx=> {
        this.resources=resx;
        this.isBz= false;
      });
  }

}
