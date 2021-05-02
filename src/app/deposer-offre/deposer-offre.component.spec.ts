import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposerOffreComponent } from './deposer-offre.component';

describe('DeposerOffreComponent', () => {
  let component: DeposerOffreComponent;
  let fixture: ComponentFixture<DeposerOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeposerOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposerOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
