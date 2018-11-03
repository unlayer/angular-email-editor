import { TestBed } from '@angular/core/testing';

import { EmailEditorService } from './email-editor.service';

describe('EmailEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailEditorService = TestBed.get(EmailEditorService);
    expect(service).toBeTruthy();
  });
});
