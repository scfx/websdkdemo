import { Injectable } from '@angular/core';
import { NavigatorNode, NavigatorNodeFactory } from '@c8y/ngx-components';

@Injectable()
export class ExampleNavigationFactory implements NavigatorNodeFactory {
  // Implement the get()-method, otherwise the ExampleNavigationFactory
  // implements the NavigatorNodeFactory interface incorrectly (!)
  get() {
    const navs: NavigatorNode[] = [];

    /**
     * mandatory for a NavigatorNode is:
     *  - label (string)
     *  - path (string)
     * A click on the NavigatorNode will load the given path. Therefore angular loads the
     * component specified for the corresponding path
     */
    navs.push(
      new NavigatorNode({
        label: 'Hello',
        icon: 'rocket',
        path: '/hello',
        priority: 100
      })
    );

    navs.push(
      new NavigatorNode({
        label: 'Tabs',
        icon: 'plane',
        path: '/tabs',
        priority: 99,
        routerLinkExact: false
      })
    );

    navs.push(
      new NavigatorNode({
        label: 'Stepper',
        icon: 'step-forward',
        path: '/stepper',
        priority: 98
      })
    );

    return navs;
  }
}
