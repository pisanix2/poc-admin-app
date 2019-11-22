import { Component, ViewChild, Input, AfterViewInit, ElementRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { merge, fromEvent } from "rxjs";
import { BaseDatasource } from "@core/crud-builder/datasource/base.datasource";

class BaseTableColumns {
  caption: string;
  field: string;
}
class BaseTableAction {
  caption: string;
  routerLink: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: fuseAnimations
})
export class ListComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: false }) filter: ElementRef;

  @Input() icon: string;
  @Input() columns: BaseTableColumns[];
  @Input() actions: BaseTableAction[];
  @Input() pageTitle: string;
  @Input() pageContextName: string;
  @Input() dataSource: BaseDatasource<any>;
  @Input() sortField: string;
  @Input() sortDirection: string;

  constructor() {
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.loadData();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadData())
      )
      .subscribe();

    this.loadData();
  }

  getDisplayedColumns() {
    return this.columns.map(el => el.field);
  }

  loadData() {
    const filter = this.filter.nativeElement.value
    const pageIndex = this.paginator.pageIndex
    const pageSize = this.paginator.pageSize
    const sortField = this.sort.active
    const sortDirection = this.sort.direction
    this.dataSource.loadData(filter, pageIndex, pageSize, sortField, sortDirection);
  }
}
