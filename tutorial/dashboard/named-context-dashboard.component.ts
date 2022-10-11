import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IManagedObject } from '@c8y/client';
import { Widget } from '@c8y/ngx-components';

@Component({
  selector: 'app-named-context-dashboard',
  templateUrl: './named-context-dashboard.component.html'
})
export class NamedContextDashboardComponent {
  context: any;
  name = 'myCustomDeviceDashboardName';
  defaultWidgets: Widget[] = [];

  constructor(private route: ActivatedRoute) {
    this.context = this.route.parent.snapshot.data;
    if (this.context && this.context.contextData) {
      const device: IManagedObject = this.context.contextData;
      this.name = this.name + '-' + device.id;
      this.defaultWidgets = [
        {
          _x: 3,
          _y: 0,
          _width: 6,
          _height: 6,
          componentId: 'angular.widget.demo',
          config: {
            device: {
              id: device.id,
              name: device.name
            },
            text: 'Welcome to a context dashboard'
          },
          title: 'Hello',
          id: 'some_unique_id'
        }
      ];
    }
  }
}
