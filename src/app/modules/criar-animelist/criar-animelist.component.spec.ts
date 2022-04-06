import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAnimelistComponent } from './criar-animelist.component';

describe('CriarAnimelistComponent', () => {
  let component: CriarAnimelistComponent;
  let fixture: ComponentFixture<CriarAnimelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAnimelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAnimelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
