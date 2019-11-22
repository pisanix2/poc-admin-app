import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { ServiceBaseService } from '@core/crud-builder/service-base/service-base.service';

export class ListDataSource implements DataSource<any> {

  private dataSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private dataService: ServiceBaseService) {

  }

  loadData(
    filter: string,
    sort: string,
    sortDirection: string,
    pageIndex: number,
    pageSize: number) {

    this.loadingSubject.next(true);

    this.dataService.loadData(filter, sort, sortDirection, pageIndex, pageSize).pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(data => {
        console.log(data)
        this.dataSubject.next(data)
      });

  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    console.log("Connecting data source");
    return this.dataSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  }

}
