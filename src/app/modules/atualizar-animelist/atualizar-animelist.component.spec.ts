import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarAnimelistComponent } from './atualizar-animelist.component';

describe('AtualizarAnimelistComponent', () => {
  let component: AtualizarAnimelistComponent;
  let fixture: ComponentFixture<AtualizarAnimelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarAnimelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarAnimelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
