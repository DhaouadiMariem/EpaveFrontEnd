import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRapportsPreComponent } from './liste-rapports-pre.component';

describe('ListeRapportsPreComponent', () => {
  let component: ListeRapportsPreComponent;
  let fixture: ComponentFixture<ListeRapportsPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRapportsPreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRapportsPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
