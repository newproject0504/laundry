import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinsTableComponent } from './pins-table.component';

describe('PinsTableComponent', () => {
  let component: PinsTableComponent;
  let fixture: ComponentFixture<PinsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PinsTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
