import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEpavisteComponent } from './ajouter-epaviste.component';

describe('AjouterEpavisteComponent', () => {
  let component: AjouterEpavisteComponent;
  let fixture: ComponentFixture<AjouterEpavisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEpavisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEpavisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
