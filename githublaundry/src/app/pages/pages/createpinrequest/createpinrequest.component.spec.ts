import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepinrequestComponent } from './createpinrequest.component';

describe('CreatepinrequestComponent', () => {
  let component: CreatepinrequestComponent;
  let fixture: ComponentFixture<CreatepinrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatepinrequestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepinrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
