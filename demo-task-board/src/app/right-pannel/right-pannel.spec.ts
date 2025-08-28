import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPannel } from './right-pannel';

describe('RightPannel', () => {
  let component: RightPannel;
  let fixture: ComponentFixture<RightPannel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightPannel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightPannel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
