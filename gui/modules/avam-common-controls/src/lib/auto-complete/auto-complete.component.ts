import {
  OnInit, OnDestroy, Component,
  ChangeDetectorRef,
  ViewContainerRef,
  ElementRef,
  Input,
  ViewChild,
  HostListener,
  TemplateRef
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subscription, Subject } from "rxjs";
import { filter, map, debounceTime, concat, distinctUntilChanged, tap, switchMap } from "rxjs/operators";
import { validateNonCharKeyCode } from "./utils";

@Component({
  selector: '[autocomplete]',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit, OnDestroy {

  //#region Fields
  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;
  isShowingResult = false;
  searchResult = [];
  private subscriptions: Subscription[] = [];
  private keyPressed$ = new Subject<KeyboardEvent>();
  private actionKeyPressed$ = new Subject<KeyboardEvent>();
  private searchText = '';

  //#endregion

  //#region External Input/Output
  @Input() acUrl: string = '';
  @Input() acAllowEmpty = false;
  @Input() acList = [];
  @Input() acSearchAndFilter: Function;
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
    this.setup();
    console.log(this.element);
  }
  ngOnDestroy() {
    this.clearAllSubscriptions();
  }
  //#endregion

  //#region Helper Methods
  private setup() {
    this.subscriptions.push(this.listenKeyEvents());
    this.viewContainer.createEmbeddedView(this.defaultTemplate);
    this.cd.markForCheck();
  }
  @HostListener('keyup', ['$event'])
  keyUp(keyEvent: KeyboardEvent) {
    debugger;
    keyEvent.preventDefault();
    keyEvent.stopPropagation();
    this.keyPressed$.next(keyEvent);
  }
  @HostListener('keydown', ['$event'])
  keyDown(keyEvent: KeyboardEvent) {
    // keyEvent.preventDefault();
    // keyEvent.stopPropagation();
    // this.actionKeyPressed$.next(keyEvent);
  }
  private listenKeyEvents(): Subscription {
    const subscription = this.keyPressed$.pipe(
      filter(e => validateNonCharKeyCode(e.keyCode)),
      map(e => e.target['value']),
      debounceTime(200),
      concat(),
      distinctUntilChanged(),
      filter((query: string) => this.acAllowEmpty || query.length > 0),
      tap((query: string) => { this.searchText = query; console.log(query); }),
      switchMap((query: string) => this.suggest(query))
    ).subscribe(result => {
      this.searchResult = result;
    });
    return subscription;
  }
  private suggest(query: string): any[] {
    debugger;
    return this.acSearchAndFilter(query);
    // return this.acList && this.acList.length ? this.searchLocalList(query) : this.searchUrl();
  }
  private searchLocalList(query: string): any[] {
    return [];
  }
  private searchUrl(): any[] {
    return ;
  }
  private onKeyPressed(keyEvent: KeyboardEvent) {

  }

  private clearAllSubscriptions() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  //#endregion
}