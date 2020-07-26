import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowncardsComponent } from './downcards.component';

describe('DowncardsComponent', () => {
  let component: DowncardsComponent;
  let fixture: ComponentFixture<DowncardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowncardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowncardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
