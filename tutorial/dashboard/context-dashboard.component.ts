import { Component } from '@angular/core';
import { Widget } from '@c8y/ngx-components';

@Component({
  selector: 'app-context-dashboard',
  templateUrl: './context-dashboard.component.html'
})
export class ContextDashboardComponent {
  defaultWidgets: Widget[] = [
    {
      _x: 3,
      _y: 0,
      _width: 6,
      _height: 6,
      componentId: 'angular.widget.demo',
      config: {
        text: 'Welcome to a context dashboard'
      },
      title: 'Hello',
      id: 'some_unique_id'
    }
  ];
}
