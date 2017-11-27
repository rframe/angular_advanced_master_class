import {Component, Input, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuModalComponent implements OnInit {
  @Input() body: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
