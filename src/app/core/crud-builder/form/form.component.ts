import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: fuseAnimations
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  schema = {
    "$id": "https://example.com/product.schema.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Product",
    "type": "object",
    "primaryKey": "id",
    "properties": {
      "id": {
        "type": "string"
      },
      "contractId": {
        "type": "string"
      },
      "userCode": {
        "type": "string"
      },
      "barCode": {
        "type": "string"
      },
      "title": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "price": {
        "type": "number"
      },
      "sendToPos": {
        "type": "boolean"
      },
      "CFOP": {
        "type": "string"
      },
      "NCM": {
        "type": "string"
      },
      "CST": {
        "type": "string"
      }
    },
    "required": [
      "contractId",
      "userCode",
      "title",
      "price"
    ]
  }

  layout = [
    { "key": "userCode", "title": "Código de barras", "validationMessages": { "userCode": "Esse campo é obrigatório" }},
    { "key": "barCode" },
    { "key": "title" },
    { "key": "description" },
    { "key": "price" },
    { "key": "sendToPos" },
    { "key": "CFOP" },
    { "key": "NCM" },
    { "key": "CST" }
  ]

  data = {
    "id": "aafb0b10ea1ba69982bade008a000497",
    "contractId": "fd100c0d7a414c42a63fbc2f6c2ec090",
    "userCode": "01",
    "barCode": "01",
    "title": "Peca 2990",
    "description": "Peca 2990",
    "price": "29.90",
    "sendToPos": false,
    "CFOP": "5102",
    "NCM": "6309.00.10",
    "CST": "102",
    "createdAt": "2019-10-30T20:54:45.831Z",
    "updatedAt": "2019-10-30T20:58:51.101Z",
    "deletedAt": null
  }

}
