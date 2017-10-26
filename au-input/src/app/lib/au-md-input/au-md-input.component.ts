import {AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";

@Component({
  selector: 'au-md-input',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './au-md-input.component.html',
  styleUrls: ['./au-md-input.component.scss']
})
export class AuMdInputComponent implements OnInit, AfterContentInit {
  ngAfterContentInit(): void {
    if (!this.input) {
      console.error('the au-md-input needs an input inside its content');
    }
  }

  @Input() icon: string;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  @HostBinding('class.input-focus')
  get isInputFocus(): boolean {
    return !!this.input && this.input.focus;
  }

  constructor() { }

  ngOnInit() { }
}
