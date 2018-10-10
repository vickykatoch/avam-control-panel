import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResourceService } from '../../services';
import { Resource } from '../../store/models';


@Component({
  selector: 'avam-resource-info',
  templateUrl: './resource-info.component.html',
  styles: []
})
export class ResourceInfoComponent implements OnInit {
  @Input() resourceId: number;
  @Output() closed = new EventEmitter();
  resxFormGroup: FormGroup;
  resource : Resource;


  constructor(private fb: FormBuilder, private resxService: ResourceService) {
    this.resource = {
      name : '',
      type : '',
      isActive: true
    };
  }

  ngOnInit() {
    this.resxFormGroup = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      isActive: true
    });
    if (this.resourceId) {
      // this.resxService.findById(this.resourceId)
      //   .then(resx=> {
      //     this.resource = resx;
      //     this.resxFormGroup.patchValue(this.resource);
      //   }).catch(console.error);
    } else {
      this.resxFormGroup.patchValue(this.resource);
    }
  }
  save(e: Event) {
    this.resource = Object.assign({}, this.resource, this.resxFormGroup.value);
    // this.resxService.save(this.resource).then(x => {
    //   this.closed.next();
    // }).catch(console.error);
    e.preventDefault();
  }

}
