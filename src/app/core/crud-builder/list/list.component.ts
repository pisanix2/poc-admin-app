import { Component, OnInit, ViewChild, Input, AfterViewInit, ElementRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge, fromEvent } from "rxjs";
import { ListDataSource } from './list-data-source';
import { ServiceBaseService } from '@core/crud-builder/service-base/service-base.service';

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
export class ListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('#filter', { static: false }) input: ElementRef;

  @Input() icon: string;
  @Input() columns: BaseTableColumns[];
  @Input() actions: BaseTableAction[];
  @Input() pageTitle: string;
  @Input() pageContextName: string;
  @Input() service: ServiceBaseService;

  dataSource: ListDataSource;

  constructor() {
  }

  ngOnInit() {
    this.dataSource = new ListDataSource(this.service);
    this.loadData();
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement, 'keyup')
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
  }

  loadData() {
    this.dataSource.loadData(
      '<filter>',
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

  getDisplayedColumns() {
    return this.columns.map(el => el.field);
  }

}
