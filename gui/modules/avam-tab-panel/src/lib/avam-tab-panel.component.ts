import { Component, AfterContentInit, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'avam-tab-panel',
  templateUrl: './avam-tab-panel.component.html',
  styleUrls: ['./avam-tab-panel.component.scss']
})
export class AvamTabPanelComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  @Input()
  headerTemplate: TemplateRef<any>;

  ngAfterContentInit() {
    const selectedTab = this.tabs.find(tab => tab.selected);
    if (!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    }
  }
}
