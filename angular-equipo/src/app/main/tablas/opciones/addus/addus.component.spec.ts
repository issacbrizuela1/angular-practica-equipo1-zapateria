import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusComponent } from './addus.component';

describe('AddusComponent', () => {
  let component: AddusComponent;
  let fixture: ComponentFixture<AddusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
