//#region IMPORTS
import {
    Component,
    TemplateRef,
    EventEmitter,
    Renderer2,
    ViewChild,
    Input,
    Output,
    OnInit,
    ElementRef,
    OnDestroy
} from "@angular/core";
import { Key } from "./models";
import { validateNonCharKeyCode, isEscapekey, isEnterkey, isNavigationkey, isTabOrEscapekey } from "./utils";
import { Subject, Subscription, Observable, fromEvent } from "rxjs";
import { filter, map, debounceTime, concat, distinctUntilChanged, switchMap } from "rxjs/operators";
//#endregion

@Component({
    selector: 'avam-dd-suggest',
    templateUrl: './dd-suggest.component.html',
    styleUrls: ['./dd-suggest.component.scss']
})
export class DropDownSuggestComponent implements OnInit, OnDestroy {
    //#region LOCAL FIELDS
    searchResult: any[] = [];
    resolvedTemplate: TemplateRef<any>;
    @ViewChild('defaultItemTemplate') defaultItemTemplate: TemplateRef<any>;
    @ViewChild('searchInput') searchInput: ElementRef;
    private nonCharKeyEventNotifier$ = new Subject<KeyboardEvent>();
    private charKeyEventNotifier$ = new Subject<KeyboardEvent>();
    private subscriptions: Subscription[] = [];
    isSearching = false;
    selectedItem: any;
    //#endregion

    //#region CTOR
    constructor(private renderer : Renderer2) {
    }
    //#endregion

    //#region EXTERNAL INPUT/OUTPUT
    @Output('itemSelected') itemSelected = new EventEmitter<any>();
    @Input()
    set itemTemplate(value: TemplateRef<any>) {
        if (value) {
            this.resolvedTemplate = value;
        } else {
            this.resolvedTemplate = this.defaultItemTemplate;
        }
    }
    @Input('searchAndFilter') searchAndFilter$: Function;
    @Input('displayField') displayField: string;
    //#endregion

    //#region NG LIFECYCLE CALLBACKS
    ngOnInit() {
        this.resolvedTemplate = this.resolvedTemplate || this.defaultItemTemplate;
        this.initialize();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    //#endregion

    //#region EVENT HANDLERS
    clear() {
        this.searchResult = [];
        this.selectedItem = null;
    }
    onItemSelected(item: any) {
        this.clear();
        this.renderer.setProperty(this.searchInput.nativeElement,'value','');
        this.itemSelected.next(item);
    }
    //#endregion

    //#region HELPER METHODS
    private initialize() {
        this.subscriptions.push(fromEvent(this.searchInput.nativeElement, 'keyup')
            .subscribe((keyEvt: KeyboardEvent) => {
                keyEvt.preventDefault();
                keyEvt.stopPropagation();
                this.charKeyEventNotifier$.next(keyEvt);
            }));
        this.subscriptions.push(fromEvent(this.searchInput.nativeElement, 'keydown').pipe(
            map((keyEvt: KeyboardEvent) => {
                if (isEscapekey(keyEvt)) {
                    this.clear();
                    keyEvt.preventDefault();
                }
                return keyEvt;
            })).subscribe((keyEvt: KeyboardEvent) => {
                this.nonCharKeyEventNotifier$.next(keyEvt);
            }));
        this.subscriptions.push(this.listenCharKeyEvents());
        this.subscriptions.push(this.listenNavigationKeyEvents());
        this.subscriptions.push(this.listenNonCharKeyEvents());
    }
    private listenNavigationKeyEvents() {
        return this.nonCharKeyEventNotifier$.pipe(
            filter(isNavigationkey),
            map(evt => evt.keyCode)
        ).subscribe(this.moveItemSelection.bind(this));
    }
    private listenCharKeyEvents() {
        return this.charKeyEventNotifier$.pipe(
            filter(e => validateNonCharKeyCode(e.keyCode)),
            map(e => e.target['value']),
            debounceTime(200),
            concat(),
            distinctUntilChanged(),
            filter((query: string) => {
                if (!query.length) {
                    this.clear();
                    return false;
                }
                return true;
            }),
            switchMap((query: string) => {
                this.isSearching=true;
                return this.search(query);
            })
        ).subscribe(result => {
            this.searchResult = result && Array.isArray(result) && result.length ? result : [];
            !this.searchResult.length && this.clear();
            this.isSearching=false;
        });
    }
    private listenNonCharKeyEvents() {
        return this.nonCharKeyEventNotifier$.pipe(
            filter(evt => isEnterkey(evt) || isTabOrEscapekey(evt)),
            map(e => {
                const isTrue = isEnterkey(e);
                isTrue && e.preventDefault();
                return isTrue;
            })
        ).subscribe(isTrue => {
            if (isTrue) {
                this.selectedItem && this.onItemSelected(this.selectedItem);
            } else {
                this.clear();
            }
        });
    }
    private moveItemSelection(key: Key) {
        if (this.searchResult.length) {
            let index = this.selectedItem ? this.searchResult.findIndex(x => x === this.selectedItem) : -1;
            key === Key.ArrowUp ? index-- : index++;
            index = index < 0 ? 0 : index > this.searchResult.length - 1 ? this.searchResult.length - 1 : index;
            this.selectedItem = this.searchResult[index];
        }
    }
    private search(query: string): Observable<any> {
        if (this.searchAndFilter$) {
            return this.searchAndFilter$(query);
        }
    }
    //#endregion

}