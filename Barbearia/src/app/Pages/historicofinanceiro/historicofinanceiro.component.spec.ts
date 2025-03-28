import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricofinanceiroComponent } from './historicofinanceiro.component';

describe('HistoricofinanceiroComponent', () => {
  let component: HistoricofinanceiroComponent;
  let fixture: ComponentFixture<HistoricofinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricofinanceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricofinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
