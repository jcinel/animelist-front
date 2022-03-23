import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAnimesComponent } from './criar-animes.component';

describe('CriarAnimesComponent', () => {
  let component: CriarAnimesComponent;
  let fixture: ComponentFixture<CriarAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAnimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
