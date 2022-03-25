import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharAnimesComponent } from './detalhar-animes.component';

describe('DetalharAnimesComponent', () => {
  let component: DetalharAnimesComponent;
  let fixture: ComponentFixture<DetalharAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharAnimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
