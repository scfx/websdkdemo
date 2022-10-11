import { CommonModule as NgCommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule, DynamicFormsModule } from '@c8y/ngx-components';
import { FORMLY_CONFIG } from '@ngx-formly/core';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CustomElementExampleComponent } from './custom-element-example/custom-element-example.component';
import { IntroductionExampleComponent } from './introduction-example/introduction-example.component';
import { JSONSchemaExampleComponent } from './json-schema-example/json-schema-example.component';
import { CustomFieldCheckbox } from './types/checkbox/checkbox.type.component';
import { hooks as lazyHooks } from './dynamic-forms.hooks';

const routes: Routes = [
  {
    path: 'dynamic-forms',
    loadChildren: () => import('./dynamic-forms.module').then(m => m.DynamicFormsTutorialModule)
  }
];

@NgModule({
  declarations: [
    IntroductionExampleComponent,
    JSONSchemaExampleComponent,
    CustomElementExampleComponent,
    CustomFieldCheckbox
  ],
  imports: [
    NgCommonModule,
    RouterModule.forChild(routes),
    DynamicFormsModule,
    PopoverModule,
    RouterModule.forChild([
      { path: 'introduction', component: IntroductionExampleComponent },
      { path: 'json', component: JSONSchemaExampleComponent },
      { path: 'custom', component: CustomElementExampleComponent }
    ]),
    CoreModule
  ],
  providers: [
    {
      provide: FORMLY_CONFIG,
      multi: true,
      useValue: {
        types: [
          {
            name: 'custom',
            component: CustomFieldCheckbox
          }
        ]
      }
    },
    ...lazyHooks
  ],
  entryComponents: [CustomFieldCheckbox]
})
export class DynamicFormsTutorialModule {}
