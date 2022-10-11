import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule, HOOK_TABS, HOOK_ROUTE, ViewContext } from '@c8y/ngx-components';
import { AwesomeComponent } from './awesome/awesome.component';
import { OutstandingComponent } from './outstanding/outstanding.component';
import { ExampleTabFactory } from '../hooks/tab';
import { DeviceTabContextComponent } from './device-tab-context.component';
import { DeviceInfoComponent } from './device-info.component';
import { RandomGuard } from './random.guard';

/**
 * Angular Routes.
 * Within this array at least path (url) and components are linked.
 */
const routes: Routes = [
  {
    path: 'tabs',
    redirectTo: 'tabs/outstanding'
  },
  {
    path: 'tabs/awesome',
    component: AwesomeComponent
  },
  {
    path: 'tabs/outstanding',
    component: OutstandingComponent
  }
];

/**
 * Route hooks allow you to use routes as child routes on a ViewContext. If used with a context
 * the particular data is resolved automatically and the page is extended by a tab. Contexts
 * are currently Application, Device, Group, Tenant and User. Note: All components used here
 * needs to be used as EntryComponent!
 * This example will add a device tab with all the context information as well as a randomly
 * guarded context tab.
 *
 */
const routeHooks = [
  {
    provide: HOOK_ROUTE,
    useValue: [
      {
        path: 'context',
        context: ViewContext.Device,
        component: DeviceTabContextComponent,
        label: 'Context',
        priority: 100,
        icon: 'bell'
      },
      {
        path: 'info',
        context: ViewContext.Device,
        component: DeviceInfoComponent,
        label: 'Info',
        priority: 0,
        icon: 'info',
        /**
         * An example of an route guard which randomly activates
         * the child route. See Guards documentation from Angular
         * for more details.
         */
        canActivate: [RandomGuard]
      }
    ],
    multi: true
  }
];

export const hooks = [{ provide: HOOK_TABS, useClass: ExampleTabFactory, multi: true }];
@NgModule({
  declarations: [
    DeviceInfoComponent,
    DeviceTabContextComponent,
    AwesomeComponent,
    OutstandingComponent
  ],
  imports: [RouterModule.forChild(routes), CoreModule],
  /**
   * Adding the hooks to the providers:
   */
  providers: [...hooks, ...routeHooks],
  /**
   * The EntryComponents to allow the HOOK_ROUTE to work:
   */
  entryComponents: [DeviceInfoComponent, DeviceTabContextComponent]
})
export class TabsModule {}
