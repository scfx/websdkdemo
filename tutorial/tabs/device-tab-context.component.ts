import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'device-tab-context',
  templateUrl: './device-tab-context.component.html'
})
export class DeviceTabContextComponent {
  constructor(public route: ActivatedRoute) {}
}
