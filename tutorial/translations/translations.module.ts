import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CoreModule,
  HOOK_TABS,
  NavigatorNode,
  gettext,
  HOOK_NAVIGATOR_NODES,
  DynamicFormsModule
} from '@c8y/ngx-components';
import { TextTranslationComponent } from './text-translation/text-translation.component';
import { NewTranslationComponent } from './new-translate/new-translation.component';
import { NewLanguageComponent } from './new-language/new-language.component';
import { TranslationTabs } from './translation-tabs';
import { DateTranslationComponent } from './date-translation/date-translation.component';
import { DynamicFormTranslationComponent } from './dynamic-form-translation/dynamic-form-translation.component';

/**
 * Angular Routes.
 * Within this array at least path (url) and components are linked.
 */
const routes: Routes = [
  {
    path: 'translations',
    redirectTo: 'translations/text-translation'
  },
  {
    path: 'translations/text-translation',
    component: TextTranslationComponent
  },
  {
    path: 'translations/date-translation',
    component: DateTranslationComponent
  },
  {
    path: 'translations/dynamic-form-translation',
    component: DynamicFormTranslationComponent
  },
  {
    path: 'translations/new-translate',
    component: NewTranslationComponent
  },
  {
    path: 'translations/new-language',
    component: NewLanguageComponent
  }
];

const translations = new NavigatorNode({
  label: gettext('Translations'),
  icon: 'star',
  path: '/translations',
  routerLinkExact: false
});

export const tabs = [
  {
    provide: HOOK_TABS,
    useClass: TranslationTabs,
    multi: true
  }
];

export const navigatorNodes = {
  provide: HOOK_NAVIGATOR_NODES,
  useValue: { get: () => translations },
  multi: true
};

@NgModule({
  declarations: [
    TextTranslationComponent,
    DateTranslationComponent,
    DynamicFormTranslationComponent,
    NewLanguageComponent,
    NewTranslationComponent
  ],
  imports: [RouterModule.forChild(routes), CoreModule, DynamicFormsModule],
  providers: [...tabs, navigatorNodes]
})
export class TranslationsModule {}
