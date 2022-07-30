import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinrequestTableComponent } from './pinrequest-table.component';

describe('PinrequestTableComponent', () => {
  let component: PinrequestTableComponent;
  let fixture: ComponentFixture<PinrequestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PinrequestTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinrequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
