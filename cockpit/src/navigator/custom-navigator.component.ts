import { Component } from '@angular/core';
import { InventoryService, IManagedObject, IResultList } from '@c8y/client';

@Component({
    selector: 'custom-navigator',
    templateUrl: './custom-navigator.component.html',
    //encapsulation: ViewEncapsulation.None
})
export class CustomNavigatorComponent {
    devices: IResultList<IManagedObject>;
    constructor(private inventory: InventoryService) {
        // _ annotation to mark this string as translatable string.
        this.loadDevices();
    }

    private filter: object = {
        fragmentType: 'c8y_IsDevice',
        // paging information will be a part of the response now
        withTotalPages: true,
        pageSize: 10
    };

    async loadDevices() {
        this.devices = await this.inventory.list(this.filter);
    }

}