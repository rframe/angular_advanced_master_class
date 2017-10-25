import {AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit} from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  ngAfterContentInit(): void {
    if (!this.input) {
      console.error('the au-fa-input needs an input inside its content');
    }
  }

  @Input() icon: string;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  @HostBinding('class.input-focus')
  get isInputFocus(): boolean {
    return !!this.input && this.input.focus;
  }

  get classes() {
    const cssClasses = {
      'fa': !!this.icon,
      // 'fa': true,
    };
    if(!!this.icon) {
      cssClasses[`fa-${this.icon}`] = true;
    }
    return cssClasses;
  }

  constructor() { }

  ngOnInit() { }
}
