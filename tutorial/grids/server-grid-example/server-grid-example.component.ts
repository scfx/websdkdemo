import { Component, EventEmitter } from '@angular/core';

import {
  ActionControl,
  BulkActionControl,
  Column,
  Pagination,
  GridConfig,
  LoadMoreMode,
  DataSourceModifier,
  ServerSideDataResult,
  Row,
  DisplayOptions
} from '@c8y/ngx-components';

import { ServerGridExampleService } from './server-grid-example.service';

/**
 * This is an example of using DataGridComponent for displaying, filtering and sorting managed objects
 * using customized columns and dynamically built inventory queries.
 */
@Component({
  selector: 'c8y-server-grid-example',
  templateUrl: './server-grid-example.component.html'
})
export class ServerGridExampleComponent {
  title: string = 'Managed objects';
  loadMoreItemsLabel: string = 'Load more managed objects';
  loadingItemsLabel: string = 'Loading managed objects…';

  displayOptions: DisplayOptions = {
    bordered: true,
    striped: true,
    filter: true,
    gridHeader: true
  };

  columns: Column[] = this.service.getColumns();
  pagination: Pagination = this.service.getPagination();
  infiniteScroll: LoadMoreMode = 'auto';
  serverSideDataCallback: any;

  refresh: EventEmitter<any> = new EventEmitter<any>();

  selectable: boolean = true;
  actionControls: ActionControl[] = this.service.getActionControls();
  bulkActionControls: BulkActionControl[] = this.service.getBulkActionControls();

  constructor(private service: ServerGridExampleService) {
    // we're setting up `serverSideDataCallback` to execute a method from this component with bound `this`
    this.serverSideDataCallback = this.onDataSourceModifier.bind(this);
    // we're setting up `onRefreshClick` to be executed on refresh event
    this.refresh.subscribe(() => this.onRefreshClick());
  }

  /** Used in ngFor for columns iteration. */
  trackByName(_index, column: Column): string {
    return column.name;
  }

  /**
   * This method loads data when data grid requests it (e.g. on initial load or on column settings change).
   * It gets the object with current data grid setup and is supposed to return:
   * full response, list of items, paging object, the number of items in the filtered subset, the number of all items.
   */
  async onDataSourceModifier(
    dataSourceModifier: DataSourceModifier
  ): Promise<ServerSideDataResult> {
    let serverSideDataResult: ServerSideDataResult;

    const { res, data, paging } = await this.service.getData(
      dataSourceModifier.columns,
      dataSourceModifier.pagination
    );
    const filteredSize: number = await this.service.getCount(
      dataSourceModifier.columns,
      dataSourceModifier.pagination
    );
    const size: number = await this.service.getTotal();

    serverSideDataResult = { res, data, paging, filteredSize, size };

    return serverSideDataResult;
  }

  /** Executes an action on row click. */
  onRowClick(row: Row) {
    console.log('row clicked:');
    console.dir(row);
  }

  /** Executes an action on the selected items. */
  onItemsSelect(selectedItemIds: string[]) {
    console.log('selected item ids:');
    console.dir(selectedItemIds);
  }

  /** Executes an action on grid config change. */
  onConfigChange(gridConfig: GridConfig) {
    console.log('grid config changed:');
    console.dir(gridConfig);
  }

  /** Executes an action on refresh event. */
  onRefreshClick() {
    console.log('refresh clicked');
  }
}
