import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydownlineTableComponent } from './mydownline-table.component';

describe('MydownlineTableComponent', () => {
  let component: MydownlineTableComponent;
  let fixture: ComponentFixture<MydownlineTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MydownlineTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydownlineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
