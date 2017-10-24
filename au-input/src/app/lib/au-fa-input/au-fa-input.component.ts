import {AfterContentInit, Component, ContentChild, Input, OnInit} from '@angular/core';

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

  @ContentChild('input') input: HTMLInputElement;

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
