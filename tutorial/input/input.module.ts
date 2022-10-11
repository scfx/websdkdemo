import { NgModule } from '@angular/core';
import { InputExampleComponent } from './input-example.component';
import {
  CommonModule,
  CoreModule,
  HOOK_NAVIGATOR_NODES,
  HOOK_ONCE_ROUTE,
  NavigatorNode,
} from '@c8y/ngx-components';

@NgModule({
  declarations: [InputExampleComponent],
  imports: [CoreModule],
  exports: [],
  entryComponents: [InputExampleComponent],
  providers: [
    {
      provide: HOOK_ONCE_ROUTE,
      useValue: {
        path: 'input',
        component: InputExampleComponent,
      },
      multi: true,
    },
    {
      provide: HOOK_NAVIGATOR_NODES,
      useValue: {
        priority: 20,
        path: '/input',
        icon: 'form',
        label: 'Input examples',
      } as NavigatorNode,
      multi: true,
    },
  ],
})
export class InputModule {}
