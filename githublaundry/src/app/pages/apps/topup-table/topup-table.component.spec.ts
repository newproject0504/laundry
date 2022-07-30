import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupTableComponent } from './topup-table.component';

describe('TopupTableComponent', () => {
  let component: TopupTableComponent;
  let fixture: ComponentFixture<TopupTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopupTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
