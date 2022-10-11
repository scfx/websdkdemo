import { Injectable } from '@angular/core';
import { InventoryService } from '@c8y/client';
import { AppStateService, NavigatorNode, NavigatorNodeFactory } from '@c8y/ngx-components';
import { filter } from 'rxjs/operators';

@Injectable()
export class DashboardNavigationFactory implements NavigatorNodeFactory {
  private dashboardNode: NavigatorNode;

  constructor(private inventory: InventoryService, private appState: AppStateService) {
    this.appState.currentUser.pipe(filter((tmp) => !!tmp)).subscribe(() => this.createDashboardNodeWithChildren());
  }

  get() {
    return this.dashboardNode ? this.dashboardNode : [];
  }

  private createDashboardNodeWithChildren() {
    const dashboardNode = new NavigatorNode({
      label: 'Dashboards',
      icon: 'th',
      priority: 95
    });

    dashboardNode.add(
      new NavigatorNode({
        label: 'Custom dashboard',
        path: '/dashboards/custom',
        icon: 'th-large',
        priority: 3
      })
    );
    dashboardNode.add(
      new NavigatorNode({
        label: 'Context dashboard',
        path: '/dashboards/context',
        icon: 'list-alt',
        priority: 2
      })
    );
    dashboardNode.add(
      new NavigatorNode({
        label: 'Widget dashboard',
        path: '/dashboards/widget',
        icon: 'th-list',
        priority: 0
      })
    );

    this.dashboardNode = dashboardNode;
    this.addNamedContextNodeIfTenantHasADevice(dashboardNode);
  }

  private async addNamedContextNodeIfTenantHasADevice(node: NavigatorNode) {
    const [firstDevice] = (await this.inventory.list({ query: 'has(c8y_IsDevice)' })).data;

    if (firstDevice) {
      node.add(
        new NavigatorNode({
          label: 'Named-context dashboard',
          icon: 'list',
          priority: 1,
          path: `/device/${firstDevice.id}/named-context`
        })
      );
    }
  }
}
