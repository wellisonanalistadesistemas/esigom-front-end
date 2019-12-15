import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlMessagesComponent } from './control-messages.component';
import { ControlMessagesService } from './control-messages.service';
import { CustomValidateService } from './custom-validate.service';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ControlMessagesComponent],
  declarations: [ControlMessagesComponent],
  providers: [ControlMessagesService, CustomValidateService]
})
export class ControlMessagesModule { }
