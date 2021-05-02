import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesRapportComponent } from './mes-rapport.component';

describe('MesRapportComponent', () => {
  let component: MesRapportComponent;
  let fixture: ComponentFixture<MesRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesRapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
