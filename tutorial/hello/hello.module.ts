import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '@c8y/ngx-components';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full'
  },
  {
    path: 'hello',
    component: HelloComponent
  }
];

@NgModule({
  declarations: [HelloComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  providers: []
})
export class HelloModule {}
