import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() icon: string;
  @Input() columns: BaseTableColumns[];
  @Input() actions: BaseTableAction[];
  @Input() pageTitle: string;
  @Input() pageContextName: string;
  @Input() dataSource: MatTableDataSource<any>;

  constructor() {
  }

  ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  getDisplayedColumns() {
      return this.columns.map(el => el.field);
  }

  applyFilter(filter: string) {
      this.dataSource.filter = filter.trim().toLowerCase();

      if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
      }
  }
}
