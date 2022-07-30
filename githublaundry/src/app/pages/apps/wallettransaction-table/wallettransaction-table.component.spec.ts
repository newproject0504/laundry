import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallettransactionTableComponent } from './wallettransaction-table.component';

describe('WallettransactionTableComponent', () => {
  let component: WallettransactionTableComponent;
  let fixture: ComponentFixture<WallettransactionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WallettransactionTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallettransactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
