import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentesEnCoursComponent } from './ventes-en-cours.component';

describe('VentesEnCoursComponent', () => {
  let component: VentesEnCoursComponent;
  let fixture: ComponentFixture<VentesEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentesEnCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentesEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
