import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarAnimesComponent } from './atualizar-animes.component';

describe('AtualizarAnimesComponent', () => {
  let component: AtualizarAnimesComponent;
  let fixture: ComponentFixture<AtualizarAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarAnimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
