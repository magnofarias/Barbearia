import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrobarbeiroComponent } from './cadastrobarbeiro.component';

describe('CadastrobarbeiroComponent', () => {
  let component: CadastrobarbeiroComponent;
  let fixture: ComponentFixture<CadastrobarbeiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrobarbeiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrobarbeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
