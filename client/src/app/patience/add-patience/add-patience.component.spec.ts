import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatienceComponent } from './add-patience.component';

describe('AddPatienceComponent', () => {
  let component: AddPatienceComponent;
  let fixture: ComponentFixture<AddPatienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
