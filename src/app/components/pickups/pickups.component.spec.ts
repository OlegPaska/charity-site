import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupsComponent } from './pickups.component';

describe('PickupsComponent', () => {
  let component: PickupsComponent;
  let fixture: ComponentFixture<PickupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickupsComponent]
    });
    fixture = TestBed.createComponent(PickupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
