import { NgModule } from '@angular/core';
import {
  CoreModule,
  HOOK_ACTION,
  HOOK_NAVIGATOR_NODES,
  HOOK_BREADCRUMB,
  HOOK_DOCS
} from '@c8y/ngx-components';
import { ExampleNavigationFactory } from './navigation';
import { ExampleActionFactory } from './action';
import { ExampleBreadcrumbFactory } from './breadcrumb';
import { ExampleDocLinkFactory } from './docLink';

/**
 * Use our predefined InjectionTokens and provide your own classes to extend behavior
 * and functionality of existing ones. Implement your own NavigationNodes, Tabs, Actions and Breadcrumbs.
 * Note: Hooks should always be implemented in the module where they are used, so that
 * a module can act standalone and has no dependencies on other modules.
 */
export const hooks = [
  { provide: HOOK_NAVIGATOR_NODES, useClass: ExampleNavigationFactory, multi: true },
  { provide: HOOK_ACTION, useClass: ExampleActionFactory, multi: true },
  { provide: HOOK_BREADCRUMB, useClass: ExampleBreadcrumbFactory, multi: true },
  { provide: HOOK_DOCS, useClass: ExampleDocLinkFactory, multi: true }
];

@NgModule({
  declarations: [],
  imports: [CoreModule],
  providers: [...hooks]
})
export class HooksModule {}
