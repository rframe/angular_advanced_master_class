import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {AuTabComponent} from '../au-tab/au-tab.component';

@Component({
  selector: 'au-tab-panel',
  templateUrl: './au-tab-panel.component.html',
  styleUrls: ['../tab-panel.component.scss']
})
export class AuTabPanelComponent implements AfterContentInit {

  @ContentChildren(AuTabComponent)
  tabs: QueryList<AuTabComponent>;

  ngAfterContentInit(): void {
    if (!this.tabs.some(x => x.selected) && !!this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: AuTabComponent) {
    if (!tab.selected) {
      this.tabs.forEach((x) => { x.selected = false; });
      tab.selected = true;
    }
  }
  get tabsContext() {
    return {
      tabs: this.tabs
    };
  }
}
