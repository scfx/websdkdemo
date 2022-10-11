import { _ } from '@c8y/ngx-components';
import { Component } from '@angular/core';
import { InventoryService, IManagedObject, IResultList } from '@c8y/client';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { StepperService } from '../stepper/stepper.service';

/**
 * The ListComponent shows how to generate a list.
 */
@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  devices: IResultList<IManagedObject>;
  informationText: string;
  filterPipe;
  pattern = '';
  selected = { id: null, name: '' };
  checkAll;

  // The filter object will add query parameters
  // to the request which is made by the service.
  private filter: object = {
    fragmentType: 'c8y_IsDevice',
    // paging information will be a part of the response now
    withTotalPages: true,
    pageSize: 10
  };

  constructor(private inventory: InventoryService, public stepperService: StepperService) {
    // _ annotation to mark this string as translatable string.
    this.informationText = 'Ooops! It seems that there is no device to display.';
    this.loadDevices();
  }

  // Promise-based usage of InventoryService.
  async loadDevices() {
    this.devices = await this.inventory.list(this.filter);
  }

  // Add a managedObject (as device) to the database.
  async addDevice(name: string) {
    let device = {
      c8y_IsDevice: {}
    };

    if (name && name.length > 0) {
      device = Object.assign({ name }, device);
    }

    await this.inventory.create(device);
    this.loadDevices();
  }

  // Delete a managedObject (as device) with given id from database.
  async deleteDevice(id: string) {
    if (id && id.length > 0) {
      await this.inventory.delete(id);
      this.loadDevices();
    }
  }

  // Sets a rxjs pipe on the list to filter for it.
  setPipe(filterStr: string) {
    this.pattern = filterStr;
    this.filterPipe = pipe(
      map((data: []) => {
        return data.filter(
          (mo: any) => mo.name && mo.name.toLowerCase().indexOf(filterStr.toLowerCase()) > -1
        );
      })
    );
  }

  // triggered if a device is selected
  updateSelected(checked, device) {
    console.log(checked, device);
  }
}
