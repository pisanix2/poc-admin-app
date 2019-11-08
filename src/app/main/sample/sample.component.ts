import { Component, OnInit, ViewChild } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss'],
    animations: fuseAnimations
})
export class SampleComponent implements OnInit {
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    icon = 'shopping_basket'
    columns = [
        { caption: 'Posição', field: 'position' },
        { caption: 'Nome', field: 'name' },
        { caption: 'Peso', field: 'weight' },
        { caption: 'Simbolo', field: 'symbol' }
    ]
    actions = [
        { caption: 'Novo produto', routerLink: '/product/create' }
    ]
    pageTitle = 'Cadastro de produto';
    pageContextName = 'Produto';
    dataSource: MatTableDataSource<any>;

    constructor() {
        // #TODO - Retirar, na herança o datasource deve ser instanciado pelo filho
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
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

const ELEMENT_DATA: any[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];