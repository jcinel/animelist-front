import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnimelistComponent } from './listar-animelist.component';

describe('ListarAnimelistComponent', () => {
  let component: ListarAnimelistComponent;
  let fixture: ComponentFixture<ListarAnimelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAnimelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAnimelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
