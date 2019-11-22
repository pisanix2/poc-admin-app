import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { BaseDatasource } from "@core/crud-builder/datasource/base.datasource";
import { CollectionViewer } from "@angular/cdk/collections";
import { Observable, BehaviorSubject, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  public getProduct(filter, pageIndex, pageSize, sortField, sortDirection): Observable<any> {
    const params = new HttpParams()
      .set('filter', filter)
      .set('page', (pageIndex + 1))
      .set('rowsPerPage', pageSize)
      .set('sortBy', sortField)
      .set('descending', (sortDirection == 'desc' ? 'true' : 'false' ));

    return this.http.get(`http://localhost:8080/product`, { params }).pipe(
      map(res => res)
    )
  }

}

export class Product {
  _id: string;
  type: DocumentType;
  search: string;

  id: string;
  userCode: string;
  barCode: string;
  title: string;
  description: string;
  price: number;
  contractId: string;
  sendToPos: boolean;
  NCM: string;
  CFOP: string;
  CST: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}

export class ProductDataSource implements BaseDatasource<Product> {

  private productSubject = new BehaviorSubject<Product[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  public recordCount = 0;

  constructor(private sampleService: SampleService) {

  }

  loadData(filter: string, pageIndex: number, pageSize: number, sortField: string, sortDirection: string) {
    this.loadingSubject.next(true);

    this.sampleService.getProduct(filter, pageIndex, pageSize, sortField, sortDirection).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(prd => {
        this.recordCount = prd.count
        this.productSubject.next(prd.rows)
      });

  }

  connect(collectionViewer: CollectionViewer): Observable<Product[]> {
    console.log("Connecting data source");
    return this.productSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.productSubject.complete();
    this.loadingSubject.complete();
  }

}