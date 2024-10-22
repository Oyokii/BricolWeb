import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingRoomDeuxComponent } from './living-room-deux.component';

describe('LivingRoomDeuxComponent', () => {
  let component: LivingRoomDeuxComponent;
  let fixture: ComponentFixture<LivingRoomDeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivingRoomDeuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingRoomDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
