import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarAnimelistComponent } from './deletar-animelist.component';

describe('DeletarAnimelistComponent', () => {
  let component: DeletarAnimelistComponent;
  let fixture: ComponentFixture<DeletarAnimelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarAnimelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarAnimelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
