import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsPageComponent } from './symptoms-page.component';

describe('SymptomsPageComponent', () => {
  let component: SymptomsPageComponent;
  let fixture: ComponentFixture<SymptomsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
