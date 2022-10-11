import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule, HOOK_NAVIGATOR_NODES, HOOK_TABS, NavigatorNode } from '@c8y/ngx-components';

import { GridsTabs } from './grids-tabs';
import { ClientGridExampleComponent } from './client-grid-example/client-grid-example.component';
import { ServerGridExampleComponent } from './server-grid-example/server-grid-example.component';
import { ServerGridExampleService } from './server-grid-example/server-grid-example.service';
import { TypeHeaderCellRendererComponent } from './server-grid-example/type-data-grid-column/type.header-cell-renderer.component';
import { TypeCellRendererComponent } from './server-grid-example/type-data-grid-column/type.cell-renderer.component';
import { TypeFilteringFormRendererComponent } from './server-grid-example/type-data-grid-column/type.filtering-form-renderer.component';

const navigatorNode = new NavigatorNode({
  label: 'Data grid',
  icon: 'table',
  path: '/data-grid',
  routerLinkExact: false
});

const routes: Routes = [
  {
    path: 'data-grid',
    redirectTo: 'data-grid/client-grid-example'
  },
  {
    path: 'data-grid/client-grid-example',
    component: ClientGridExampleComponent
  },
  {
    path: 'data-grid/server-grid-example',
    component: ServerGridExampleComponent
  }
];

@NgModule({
  imports: [CoreModule, RouterModule.forChild(routes)],
  declarations: [
    ClientGridExampleComponent,
    ServerGridExampleComponent,
    TypeHeaderCellRendererComponent,
    TypeCellRendererComponent,
    TypeFilteringFormRendererComponent
  ],
  entryComponents: [
    TypeHeaderCellRendererComponent,
    TypeCellRendererComponent,
    TypeFilteringFormRendererComponent
  ],
  providers: [
    {
      provide: HOOK_NAVIGATOR_NODES,
      useValue: { get: () => navigatorNode },
      multi: true
    },
    {
      provide: HOOK_TABS,
      useClass: GridsTabs,
      multi: true
    },
    ServerGridExampleService
  ]
})
export class GridsModule {}
