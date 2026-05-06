import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraciasParticipacion } from './gracias-participacion';

describe('GraciasParticipacion', () => {
  let component: GraciasParticipacion;
  let fixture: ComponentFixture<GraciasParticipacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraciasParticipacion],
    }).compileComponents();

    fixture = TestBed.createComponent(GraciasParticipacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
