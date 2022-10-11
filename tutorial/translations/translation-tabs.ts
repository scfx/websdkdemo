import { Injectable } from '@angular/core';
import { TabFactory, Tab } from '@c8y/ngx-components';
import { Router } from '@angular/router';

@Injectable()
export class TranslationTabs implements TabFactory {
  constructor(public router: Router) {}

  get() {
    const tabs: Tab[] = [];

    if (this.router.url.match(/translations/g)) {
      tabs.push({
        icon: 'rocket',
        priority: 1000,
        label: 'Text translation',
        path: 'translations/text-translation'
      } as Tab);

      tabs.push({
        icon: 'rocket',
        priority: 999,
        label: 'Date translation',
        path: 'translations/date-translation'
      } as Tab);

      tabs.push({
        icon: 'rocket',
        priority: 998,
        label: 'Dynamic form translation',
        path: 'translations/dynamic-form-translation'
      } as Tab);

      tabs.push({
        icon: 'rocket',
        priority: 997,
        label: 'New language',
        path: 'translations/new-language'
      } as Tab);

      tabs.push({
        icon: 'rocket',
        priority: 996,
        label: 'Edit/add translation',
        path: 'translations/new-translate'
      } as Tab);
    }
    return tabs;
  }
}
