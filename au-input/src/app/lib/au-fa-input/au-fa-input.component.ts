import {AfterContentInit, Component, ContentChild, Input, OnInit} from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  ngAfterContentInit(): void {
    console.log('input', this.input);
  }

  @Input() icon: string;

  @ContentChild(InputRefDirective) input: InputRefDirective;

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
