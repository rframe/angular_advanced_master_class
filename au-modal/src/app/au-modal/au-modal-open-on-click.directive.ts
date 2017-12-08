import {AfterContentInit, ContentChild, Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuModalComponent} from './au-modal.component';
import {AuModalService} from './modal.service';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit {

  @Input() set auModalOpenOnClick (element: HTMLBaseElement | Array<HTMLBaseElement>) {
    this.setAuModalOpenOnClick(element);
  }

  @ContentChild(AuModalComponent) modal: AuModalComponent;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private modalService: AuModalService) {
  }

  ngOnInit() {
    this.modalService.close$
      .subscribe(() => this.viewContainer.clear());
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
