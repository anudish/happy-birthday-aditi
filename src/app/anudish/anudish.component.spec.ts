import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnudishComponent } from './anudish.component';

describe('AnudishComponent', () => {
  let component: AnudishComponent;
  let fixture: ComponentFixture<AnudishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnudishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnudishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
