import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryAidComponent } from './military-aid.component';

describe('MilitaryAidComponent', () => {
  let component: MilitaryAidComponent;
  let fixture: ComponentFixture<MilitaryAidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilitaryAidComponent]
    });
    fixture = TestBed.createComponent(MilitaryAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
