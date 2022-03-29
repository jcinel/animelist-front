import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarUsuariosComponent } from './deletar-usuarios.component';

describe('DeletarUsuariosComponent', () => {
  let component: DeletarUsuariosComponent;
  let fixture: ComponentFixture<DeletarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
