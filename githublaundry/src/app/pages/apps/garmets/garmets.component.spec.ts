import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmetsComponent } from './garmets.component';

describe('GarmetsComponent', () => {
  let component: GarmetsComponent;
  let fixture: ComponentFixture<GarmetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GarmetsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
