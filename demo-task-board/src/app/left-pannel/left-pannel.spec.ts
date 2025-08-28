import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPannel } from './left-pannel';

describe('LeftPannel', () => {
  let component: LeftPannel;
  let fixture: ComponentFixture<LeftPannel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftPannel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftPannel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
