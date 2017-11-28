import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective {

  @Input() set auModalOpenOnClick(element: HTMLBaseElement | Array<HTMLBaseElement>) {
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

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

}
