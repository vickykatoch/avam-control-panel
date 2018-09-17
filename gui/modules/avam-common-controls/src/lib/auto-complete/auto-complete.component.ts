import { OnInit, OnDestroy, Component, ChangeDetectorRef, ViewContainerRef, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector : '[autocomplete]',
  template : `
  <ng-template #suggestionsTplRef>

  </ng-template>
  `,
  styles: [
    `
      .ac-results {
        position: absolute;
      }
      .ac-backdrop {
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1;
      }
      .ac-item {
        position: relative;
        z-index: 2;
        display: block;
      }
    `
  ],
})
export class AutoCompleteComponent implements OnInit, OnDestroy {

  //#region Fields
  //#endregion

  //#region ctor
  constructor(private element: ElementRef,
    private viewContainer: ViewContainerRef,
    private http: HttpClient,
    private cd: ChangeDetectorRef) {
  }
  //#endregion

  //#region NG Lifecycle
  ngOnInit() {
  }
  ngOnDestroy() {
  }
  //#endregion
}
