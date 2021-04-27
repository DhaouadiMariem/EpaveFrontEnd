import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterExpertComponent } from './ajouter-expert.component';

describe('AjouterExpertComponent', () => {
  let component: AjouterExpertComponent;
  let fixture: ComponentFixture<AjouterExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterExpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
