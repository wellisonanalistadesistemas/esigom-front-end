import { TestBed, inject } from '@angular/core/testing';

import { ControlMessagesService } from './control-messages.service';

describe('ControlMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlMessagesService]
    });
  });

  it('should ...', inject([ControlMessagesService], (service: ControlMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
