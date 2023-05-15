import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCinemaComponent } from './afficher-cinema.component';

describe('AfficherCinemaComponent', () => {
  let component: AfficherCinemaComponent;
  let fixture: ComponentFixture<AfficherCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherCinemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
