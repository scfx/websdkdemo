import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '@c8y/ngx-components';
import { hooks as lazyHooks } from './lazy.hooks';

/**
 * Angular Routes.
 * Within this array at least path (url) and components are linked.
 */
const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy-loaded.module').then(m => m.LazyLoadedModule)
  }
];
@NgModule({
  imports: [NgCommonModule, RouterModule.forChild(routes), CoreModule],
  providers: [...lazyHooks]
})
export class LazyRoutingModule {}
