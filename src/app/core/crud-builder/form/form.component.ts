import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: fuseAnimations
})
export class FormComponent implements OnInit {

  @Input() schema: any;
  @Input() layout: any;
  @Input() data: any;
  @Input() title: string;
  @Input() subtitle: string;

  @Output() onSubmit = new EventEmitter<any>();

  constructor(private location: Location) {
  }

  ngOnInit() {
    this.jsonFormObject = {
      schema: this.schema,
      layout: this.layout,
      data: this.data
    }   
  }

  jsonFormObject: any;
  valid: boolean;
  jsonFormOptions: any = {
    addSubmit: true,
    debug: false,
    loadExternalAssets: true,
    returnEmptyFields: false,
    setSchemaDefaults: true,
    defautWidgetOptions: { feedback: true }
  };
  selectedFramework = 'material-design';
  selectedLanguage = 'en';

  onBack() {
    this.location.back();
  }

  submit(data) {
    if (this.valid) {
      this.onSubmit.emit(data);
    }
  }

  isValid(isValid) {
    this.valid = isValid;
  }
  
  onChanges(data) {
    console.log('onChanges', data);
  }

  validationErrors(errorObject) {
    console.log('validationErrors', errorObject);
  }

}
