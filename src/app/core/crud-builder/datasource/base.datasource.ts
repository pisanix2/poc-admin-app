import { DataSource } from "@angular/cdk/collections";

export abstract class BaseDatasource<T> extends DataSource<T> {
    abstract recordCount: number;
    abstract loadData(filter: string, pageIndex: number, pageSize: number, sortField: string, sortDirection: string);
}