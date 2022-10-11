import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule, HOOK_NAVIGATOR_NODES, HOOK_ROUTE, ViewContext } from '@c8y/ngx-components';
import { ContextDashboardModule } from '@c8y/ngx-components/context-dashboard';
import { CustomDashboardComponent } from './custom-dashboard.component';
import { WidgetDashboardComponent } from './widget-dashboard.component';
import { ContextDashboardComponent } from './context-dashboard.component';
import { NamedContextDashboardComponent } from './named-context-dashboard.component';
import { DashboardNavigationFactory } from './dashboard-navigation';

/**
 * Angular Routes.
 * Within this array at least path (url) and components are linked.
 */
const routes: Routes = [
  {
    path: 'dashboards/custom',
    component: CustomDashboardComponent
  },
  {
    path: 'dashboards/widget',
    component: WidgetDashboardComponent
  },
  {
    path: 'dashboards/context',
    component: ContextDashboardComponent
  }
];

@NgModule({
  declarations: [CustomDashboardComponent, WidgetDashboardComponent, ContextDashboardComponent, NamedContextDashboardComponent],
  imports: [
    ContextDashboardModule.config(),
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    ContextDashboardModule
  ],
  providers: [
    { provide: HOOK_NAVIGATOR_NODES, useClass: DashboardNavigationFactory, multi: true },
    {
      provide: HOOK_ROUTE,
      useValue: [
        {
          path: 'named-context',
          context: ViewContext.Device,
          component: NamedContextDashboardComponent,
          label: 'Named-context dashboard',
          priority: 100,
          icon: 'rocket'
        }
      ],
      multi: true
    }
  ]
})
export class DashboardModule {}
