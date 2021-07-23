import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoncomposantEnfantComponent } from './moncomposant-enfant.component';

describe('MoncomposantEnfantComponent', () => {
  let component: MoncomposantEnfantComponent;
  let fixture: ComponentFixture<MoncomposantEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoncomposantEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoncomposantEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
