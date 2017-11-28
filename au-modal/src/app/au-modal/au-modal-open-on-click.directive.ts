import {AfterContentInit, ContentChild, Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuModalComponent} from './au-modal.component';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective {

  @Input() set auModalOpenOnClick (element: HTMLBaseElement | Array<HTMLBaseElement>) {
    this.setAuModalOpenOnClick(element);
  }

  @ContentChild(AuModalComponent) modal: AuModalComponent;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

  setAuModalOpenOnClick(element: HTMLBaseElement | Array<HTMLBaseElement>) {
    let elements: Array<HTMLBaseElement> = [];

    if (element instanceof Array) {
      elements = [...element];
    } else {
      elements = [element];
    }

    elements.forEach((el) => {
      el.addEventListener('click', () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      })
    })
  }

}
