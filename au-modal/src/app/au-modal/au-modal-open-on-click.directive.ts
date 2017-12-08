import {
  AfterContentInit, ContentChild, Directive, Input, OnDestroy, OnInit, TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {AuModalComponent} from './au-modal.component';
import {AuModalService} from './modal.service';
import {Subscription} from 'rxjs/Subscription';
import {forEach} from '@angular/router/src/utils/collection';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit, OnDestroy {

  @Input() set auModalOpenOnClick (element: HTMLBaseElement | Array<HTMLBaseElement>) {
    this.setAuModalOpenOnClick(element);
  }

  @ContentChild(AuModalComponent) modal: AuModalComponent;

  private subscritpions: Array<Subscription> = [];

  private elements: Array<HTMLBaseElement>;
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private modalService: AuModalService) {
  }

  ngOnInit() {
    this.subscritpions.push(
      this.modalService.close$
        .subscribe(() => this.viewContainer.clear())
    );
  }

  ngOnDestroy(): void {
    this.subscritpions.forEach(x => x.unsubscribe());
    this.elements.forEach(x => x.removeEventListener('click', this.clickHandler))
  }

  setAuModalOpenOnClick(element: HTMLBaseElement | Array<HTMLBaseElement>) {
    this.elements = this.elements || [];

    if (element instanceof Array) {
      this.elements = [...this.elements, ...element];
    } else {
      this.elements = [...this.elements, element];
    }

    // this.elements.forEach((el) => el.addEventListener('click', this.clickHandlerA.bind(this)));
    this.elements.forEach((el) => el.addEventListener('click', this.clickHandler));
  }

  clickHandlerA() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  clickHandler = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this)

}
