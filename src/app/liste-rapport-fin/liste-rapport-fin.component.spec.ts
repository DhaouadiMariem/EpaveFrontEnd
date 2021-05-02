import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRapportFinComponent } from './liste-rapport-fin.component';

describe('ListeRapportFinComponent', () => {
  let component: ListeRapportFinComponent;
  let fixture: ComponentFixture<ListeRapportFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRapportFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRapportFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
