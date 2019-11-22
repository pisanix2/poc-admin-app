import { Component } from '@angular/core';
import { SampleService, ProductDataSource } from "./sample.service";

@Component({
    selector: 'sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent {

    icon = 'shopping_basket'
    columns = [
        { caption: 'Código de barras', field: 'barCode' },
        { caption: 'Titulo', field: 'title' },
        { caption: 'NCM', field: 'NCM' },
        { caption: 'Preço', field: 'price' }
    ]
    actions = [
        { caption: 'Novo produto', routerLink: '/product/create' }
    ]
    pageTitle = 'Cadastro de produto';
    pageContextName = 'Produto';
    sortField = "barCode";
    sortDirection = "asc";
    dataSource = new ProductDataSource(this.sampleService);

    constructor(private sampleService: SampleService) {

    }
}
