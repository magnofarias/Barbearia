import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoprodutosComponent } from './historicoprodutos.component';

describe('HistoricoprodutosComponent', () => {
  let component: HistoricoprodutosComponent;
  let fixture: ComponentFixture<HistoricoprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoprodutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
