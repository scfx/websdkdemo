import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '@c8y/ngx-components';
import { ComponentTwo } from './component-two.component';
import { ComponentOne } from './component-one.component';

const routes: Routes = [
  {
    path: 'one',
    component: ComponentOne
  },
  {
    path: 'two',
    component: ComponentTwo
  }
];

@NgModule({
  declarations: [ComponentOne, ComponentTwo],
  imports: [CommonModule, RouterModule.forChild(routes), CoreModule],
})
export class LazyLoadedModule { }
