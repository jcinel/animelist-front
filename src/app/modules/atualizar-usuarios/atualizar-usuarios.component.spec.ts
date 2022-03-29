import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarUsuariosComponent } from './atualizar-usuarios.component';

describe('AtualizarUsuariosComponent', () => {
  let component: AtualizarUsuariosComponent;
  let fixture: ComponentFixture<AtualizarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
