import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherUnFilmComponent } from './afficher-un-film.component';

describe('AfficherUnFilmComponent', () => {
  let component: AfficherUnFilmComponent;
  let fixture: ComponentFixture<AfficherUnFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherUnFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherUnFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
