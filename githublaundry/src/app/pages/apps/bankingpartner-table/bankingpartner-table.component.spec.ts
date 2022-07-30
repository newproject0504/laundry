import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingpartnerTableComponent } from './bankingpartner-table.component';

describe('BankingpartnerTableComponent', () => {
  let component: BankingpartnerTableComponent;
  let fixture: ComponentFixture<BankingpartnerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BankingpartnerTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingpartnerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
