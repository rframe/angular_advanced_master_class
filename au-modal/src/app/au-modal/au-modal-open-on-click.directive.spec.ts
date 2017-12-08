import { AuModalOpenOnClickDirective } from './au-modal-open-on-click.directive';
import {TemplateRef, ViewContainerRef} from '@angular/core';
import {AuModalService} from './modal.service';

describe('AuModalOpenOnClickDirective', () => {
  it('should create an instance', () => {
    const directive = new AuModalOpenOnClickDirective(
      {} as TemplateRef<any>,
      {} as ViewContainerRef,
      {} as AuModalService

    );
    expect(directive).toBeTruthy();
  });
});
