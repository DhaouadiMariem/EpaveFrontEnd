import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesEpavesComponent } from './mes-epaves.component';

describe('MesEpavesComponent', () => {
  let component: MesEpavesComponent;
  let fixture: ComponentFixture<MesEpavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesEpavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesEpavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
