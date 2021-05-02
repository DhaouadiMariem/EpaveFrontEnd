import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesSinistresComponent } from './mes-sinistres.component';

describe('MesSinistresComponent', () => {
  let component: MesSinistresComponent;
  let fixture: ComponentFixture<MesSinistresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesSinistresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesSinistresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
