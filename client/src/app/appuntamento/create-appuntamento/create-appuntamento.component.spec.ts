import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppuntamentoComponent } from './create-appuntamento.component';

describe('CreateAppuntamentoComponent', () => {
  let component: CreateAppuntamentoComponent;
  let fixture: ComponentFixture<CreateAppuntamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAppuntamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppuntamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
