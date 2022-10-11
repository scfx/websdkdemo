import { Injectable } from '@angular/core';
import { ExtensionFactory, DocLink } from '@c8y/ngx-components';
import { StepperService } from '../stepper/stepper.service';

/**
 * Extend the right-drawer with custom Quicklinks or Doclinks.
 * The only difference between both is the type: 'doc' | 'quicklink'.
 * To disable or exclude documentation links which are resolved from
 * Cumulocity use the package.json of your app.
 */
@Injectable()
export class ExampleDocLinkFactory implements ExtensionFactory<DocLink> {
  constructor(private deviceService: StepperService) {}

  get() {
    const docLinks: DocLink[] = [];
    docLinks.push({
      icon: 'c8y-icon c8y-icon-atom',
      label: 'Factory QLink',
      type: 'quicklink',
      url: '',
      click: () => this.customClick()
    });

    docLinks.push({
      icon: 'c8y-icon c8y-icon-atom',
      label: 'Factory doc link',
      type: 'doc',
      url: '#'
    });

    return docLinks;
  }

  customClick() {
    this.deviceService.modalCreateDevice();
  }
}
