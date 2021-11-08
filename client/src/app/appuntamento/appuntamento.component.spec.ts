import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppuntamentoComponent } from './appuntamento.component';

describe('AppuntamentoComponent', () => {
  let component: AppuntamentoComponent;
  let fixture: ComponentFixture<AppuntamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppuntamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppuntamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
