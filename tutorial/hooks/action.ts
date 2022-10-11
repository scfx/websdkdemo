import { Injectable } from '@angular/core';
import { ActionFactory, Action } from '@c8y/ngx-components';
import { Router } from '@angular/router';
import { StepperService } from '../stepper/stepper.service';

/**
 * Actions are available through a button (+) within the header.
 * The actions button is always visible within the header.
 */
@Injectable()
export class ExampleActionFactory implements ActionFactory {
  // Inject the angular Router and custom StepperService
  constructor(private router: Router, private stepperService: StepperService) {}

  // Implement the get()-method, otherwise the ExampleActionFactory
  // implements the ActionFactory interface incorrectly (!)
  get() {
    // You can have more than one action
    // The actions button is rendered as a dropdown of buttons
    const actions: Action[] = [];
    // Mandatory for an Action is just a label (string)
    let someDeviceAction: Action;

    someDeviceAction = {
      label: 'Custom action',
      action: () => console.log('Custom action is triggered.'),
      disabled: true,
      priority: 1
    };

    // Only if the URL matches: .../apps/tutorial-application/#/stepper
    // the actions-button is enabled and the user can click it.
    if (this.router.url.match(/stepper/g)) {
      someDeviceAction.disabled = false;
    }

    actions.push(someDeviceAction);
    return actions;
  }
}
