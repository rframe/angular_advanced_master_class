import {Component, Input, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {AuModalService} from './modal.service';
import {EventManager} from '@angular/platform-browser';

@Component({
  selector: 'au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuModalComponent implements OnInit {
  @Input() body: TemplateRef<any>;
  @Input() hideOnEscape: boolean = true;
  @Input() hideOnClickOutside: boolean = true;
  @Input() context: any;
  constructor(private modalService: AuModalService,
              private eventManager: EventManager) { }

  ngOnInit() {
    this.eventManager.addGlobalEventListener('window', 'keyup.esc', () => {
      if(this.hideOnEscape) {
        this.close();
      }
    });
  }

  close() {
    this.modalService.close();
  }

  onClickOutsideModal() {
    if(this.hideOnClickOutside) {
      this.close();
    }
  }

  cancelClick(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
}
