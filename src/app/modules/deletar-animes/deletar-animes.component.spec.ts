import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarAnimesComponent } from './deletar-animes.component';

describe('DeletarAnimesComponent', () => {
  let component: DeletarAnimesComponent;
  let fixture: ComponentFixture<DeletarAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarAnimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
