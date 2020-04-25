import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataPageComponent } from './personal-data-page.component';

describe('PersonalDataPageComponent', () => {
  let component: PersonalDataPageComponent;
  let fixture: ComponentFixture<PersonalDataPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDataPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
