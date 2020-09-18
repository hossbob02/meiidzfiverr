import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotQualifiedComponent } from './not-qualified.component';

describe('NotQualifiedComponent', () => {
  let component: NotQualifiedComponent;
  let fixture: ComponentFixture<NotQualifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotQualifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotQualifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
