import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ControlMessagesService } from './control-messages.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent implements OnInit {
  @Input() control: FormControl;
  constructor() { }

  ngOnInit() {
  }
  get errorMessage() {

    if (this.control !== undefined) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched || propertyName === 'customService')) {
          return ControlMessagesService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
    }

    return null;
  }
}
