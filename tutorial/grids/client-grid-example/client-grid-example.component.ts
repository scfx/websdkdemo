import { Component, OnInit } from '@angular/core';

import {
  ActionControl,
  BuiltInActionType,
  BulkActionControl,
  Column,
  Pagination,
  GridConfig
} from '@c8y/ngx-components';

import { getData } from './data';

/**
 * This is an example of using DataGridComponent to display a static set of data
 * and allow user for filering and sorting it on client side.
 */
@Component({
  selector: 'c8y-client-grid-example',
  templateUrl: './client-grid-example.component.html'
})
export class ClientGridExampleComponent implements OnInit {
  /** This will be used as a title for the data grid. */
  title: string = 'Devices';
  /**
   * This defines what columns will be displayed in the grid.
   * In this example we're just displaying properties from the items from the loaded data file.
   */
  columns: Column[] = [
    {
      name: 'id',
      header: 'ID',
      path: 'id',
      filterable: true
    },
    {
      name: 'name',
      header: 'Name',
      path: 'name',
      filterable: true
    },
    {
      name: 'type',
      header: 'Type',
      path: 'type',
      filterable: true
    },
    {
      name: 'creationTime',
      header: 'Creation time',
      path: 'creationTime',
      filterable: true
    },
    {
      name: 'lastUpdated',
      header: 'Last updated',
      path: 'lastUpdated',
      filterable: true
    },
    {
      name: 'owner',
      header: 'Owner',
      path: 'owner',
      filterable: true
    }
  ];
  /** Initial pagination settings. */
  pagination: Pagination = {
    pageSize: 30,
    currentPage: 1
  };
  /** Will allow for selecting items and perform bulk actions on them. */
  selectable: boolean = true;
  /**
   * Defines actions for individual rows.
   * `type` can be one of the predefined ones, or a custom one.
   * `callback` executes the action (based on the selected item object).
   */
  actionControls: ActionControl[] = [
    {
      type: BuiltInActionType.Edit,
      callback: (selectedItem) => this.onItemEdit(selectedItem)
    },
    {
      type: BuiltInActionType.Delete,
      callback: (selectedItem) => this.onItemDelete(selectedItem)
    }
  ];
  /**
   * Defines actions for multiple rows.
   * `type` can be one of the predefined ones, or a custom one.
   * `callback` executes the action (based on the ids of selected items).
   */
  bulkActionControls: BulkActionControl[] = [
    {
      type: BuiltInActionType.Export,
      callback: (selectedItemIds) => this.onItemsExport(selectedItemIds)
    },
    {
      type: BuiltInActionType.Delete,
      callback: (selectedItemIds) => this.onItemsDelete(selectedItemIds)
    }
  ];
  /** Static data to display. */
  data: any[];

  ngOnInit() {
    // load static data from another file, could be loaded from anywhere
    this.data = getData();
  }

  /** Executes an edit action on the selected item. */
  onItemEdit(selectedItem) {
    console.log('item to edit:');
    console.dir(selectedItem);
  }

  /** Executes a delete action on the selected item. */
  onItemDelete(selectedItem) {
    console.log('item to delete:');
    console.dir(selectedItem);
  }

  /** Executes an action on selected items, whenever the selection changes. */
  onItemsSelect(selectedItemIds) {
    console.log('selected items:');
    console.dir(selectedItemIds);
  }

  /** Executes an export action of the selected multiple items. */
  onItemsExport(selectedItemIds) {
    console.log('items to export:');
    console.dir(selectedItemIds);
  }

  /** Executes a delete action on the selected multiple items. */
  onItemsDelete(selectedItemIds) {
    console.log('items to delete:');
    console.dir(selectedItemIds);
  }

  /** Executes logic when data grid config changes, e.g. you could store it somewhere, to reload it later. */
  onConfigChange(config: GridConfig) {
    console.log('configuration changed:');
    console.dir(config);
  }
}
