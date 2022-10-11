import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '@c8y/ngx-components';
import { StepperComponent } from './stepper.component';
import { StepperService } from './stepper.service';
import { DeviceStepperComponent } from './device-stepper.component';

/**
 * Angular Routes.
 * Within this array at least path (url) and components are linked.
 */
const routes: Routes = [
  {
    path: 'stepper',
    component: StepperComponent
  }
];

@NgModule({
  declarations: [StepperComponent, DeviceStepperComponent],
  imports: [RouterModule.forChild(routes), CoreModule, FormsModule, ReactiveFormsModule],
  providers: [StepperService],
  entryComponents: [DeviceStepperComponent]
})
export class StepperModule {}
