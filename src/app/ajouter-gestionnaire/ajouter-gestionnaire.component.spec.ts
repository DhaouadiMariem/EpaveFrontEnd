import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGestionnaireComponent } from './ajouter-gestionnaire.component';

describe('AjouterGestionnaireComponent', () => {
  let component: AjouterGestionnaireComponent;
  let fixture: ComponentFixture<AjouterGestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
