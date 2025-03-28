import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoclienteComponent } from './historicocliente.component';

describe('HistoricoclienteComponent', () => {
  let component: HistoricoclienteComponent;
  let fixture: ComponentFixture<HistoricoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoclienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
