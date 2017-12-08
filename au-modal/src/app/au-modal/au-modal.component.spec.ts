import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuModalComponent } from './au-modal.component';
import {AuModalModule} from './au-modal.module';


describe('AuModalComponent', () => {
  let component: AuModalComponent;
  let fixture: ComponentFixture<AuModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AuModalModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
