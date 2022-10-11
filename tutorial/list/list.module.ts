import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule, HOOK_NAVIGATOR_NODES, NavigatorNode } from '@c8y/ngx-components';
import { ListComponent } from './list.component';
import { ListVirtualScrollComponent } from './list-virtual-scroll.component';

/**
 * Angular Routes.
 * Within this array at least path (url) and components are linked.
 */
const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'list-virtual-scroll',
    component: ListVirtualScrollComponent
  }
];

const root = new NavigatorNode({
  label: 'Lists',
  icon: 'c8y-device',
  priority: 97,
});

root.add( new NavigatorNode({
  label: 'basic',
  path: '/list',
  routerLinkExact: false
}));

root.add( new NavigatorNode({
  label: 'virtual scroll',
  path: '/list-virtual-scroll',
  routerLinkExact: false
}));

@NgModule({
  declarations: [ListComponent, ListVirtualScrollComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  providers: [
    {
      provide: HOOK_NAVIGATOR_NODES,
      useValue: {get: () => root},
      multi: true
    }
  ]
})
export class ListModule {}
