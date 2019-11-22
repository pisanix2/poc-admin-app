import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class ServiceBaseService {

  constructor() { }

  abstract loadData(filter: string, sort: string, sortDirection: string, pageIndex: number, pageSize: number )
}
