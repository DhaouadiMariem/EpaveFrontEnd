import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportFinComponent } from './rapport-fin.component';

describe('RapportFinComponent', () => {
  let component: RapportFinComponent;
  let fixture: ComponentFixture<RapportFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
