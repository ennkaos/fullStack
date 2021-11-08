import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppuntamentoComponent } from './list-appuntamento.component';

describe('ListAppuntamentoComponent', () => {
  let component: ListAppuntamentoComponent;
  let fixture: ComponentFixture<ListAppuntamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppuntamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppuntamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
