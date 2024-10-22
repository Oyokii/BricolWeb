import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesProduitsComponent } from './types-produits.component';

describe('TypesProduitsComponent', () => {
  let component: TypesProduitsComponent;
  let fixture: ComponentFixture<TypesProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypesProduitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
