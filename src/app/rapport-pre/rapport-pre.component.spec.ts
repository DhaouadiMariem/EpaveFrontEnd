import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportPreComponent } from './rapport-pre.component';

describe('RapportPreComponent', () => {
  let component: RapportPreComponent;
  let fixture: ComponentFixture<RapportPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportPreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
