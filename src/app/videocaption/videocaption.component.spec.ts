import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocaptionComponent } from './videocaption.component';

describe('VideocaptionComponent', () => {
  let component: VideocaptionComponent;
  let fixture: ComponentFixture<VideocaptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocaptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
