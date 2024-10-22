import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestProductsListComponent } from './best-products-list.component';

describe('BestProductsListComponent', () => {
  let component: BestProductsListComponent;
  let fixture: ComponentFixture<BestProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestProductsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
