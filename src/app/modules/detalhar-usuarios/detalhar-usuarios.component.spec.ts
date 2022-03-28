import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharUsuariosComponent } from './detalhar-usuarios.component';

describe('DetalharUsuariosComponent', () => {
  let component: DetalharUsuariosComponent;
  let fixture: ComponentFixture<DetalharUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
