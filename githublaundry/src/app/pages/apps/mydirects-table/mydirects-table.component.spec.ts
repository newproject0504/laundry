import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydirectsTableComponent } from './mydirects-table.component';

describe('MydirectsTableComponent', () => {
  let component: MydirectsTableComponent;
  let fixture: ComponentFixture<MydirectsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MydirectsTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydirectsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
