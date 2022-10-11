import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import { BootstrapComponent, CoreModule, RouterModule } from '@c8y/ngx-components';
import { BulkOperationSchedulerModule } from '@c8y/ngx-components/operations/bulk-operation-scheduler';
import { InputModule } from './input/input.module';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DashboardModule } from './dashboard';
import { DynamicFormsTutorialModule } from './dynamic-forms';
import { GridsModule } from './grids';
import { HelloModule } from './hello';
import { HooksModule } from './hooks';
import { LazyRoutingModule } from './lazy';
import { ListModule } from './list';
import { ProviderConfigurationTutorialModule } from './provider-configuration';
import { StepperModule } from './stepper';
import { TabsModule } from './tabs';
import { TranslationsModule } from './translations';
import { DashboardWidgetDemoModule } from './widget';
import { WizardModule } from './generic-wizard';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    ngRouterModule.forRoot([], { enableTracing: false, useHash: true }),
    RouterModule.forRoot(),
    // Import the CoreModule to add c8y functionality
    CoreModule.forRoot(),

    // The following modules show examples of how to
    HelloModule,
    TabsModule,
    DashboardWidgetDemoModule,
    DashboardModule,
    HooksModule,
    ListModule,
    WizardModule,
    StepperModule,
    GridsModule,
    LazyRoutingModule,
    TranslationsModule,
    BulkOperationSchedulerModule,
    DynamicFormsTutorialModule,
    ProviderConfigurationTutorialModule,
    InputModule
  ],

  providers: [BsModalRef],

  /**
   * Bootstrap your application with the BootstrapComponent which will use the `<c8y-bootstrap>`
   * component to initialize the root application. Alternatively you can bootstrap
   * a component of your choice and include that tag into its template or only reuse the given components
   */
  bootstrap: [BootstrapComponent]
})
export class AppModule {}
