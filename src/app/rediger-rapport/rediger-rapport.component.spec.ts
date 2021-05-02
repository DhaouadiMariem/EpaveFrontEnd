import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedigerRapportComponent } from './rediger-rapport.component';

describe('RedigerRapportComponent', () => {
  let component: RedigerRapportComponent;
  let fixture: ComponentFixture<RedigerRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedigerRapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedigerRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
