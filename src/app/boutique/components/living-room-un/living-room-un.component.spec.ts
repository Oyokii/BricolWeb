import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingRoomUnComponent } from './living-room-un.component';

describe('LivingRoomUnComponent', () => {
  let component: LivingRoomUnComponent;
  let fixture: ComponentFixture<LivingRoomUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivingRoomUnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingRoomUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
