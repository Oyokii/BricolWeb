import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTypesListComponent } from './products-types-list.component';

describe('ProductsTypesListComponent', () => {
  let component: ProductsTypesListComponent;
  let fixture: ComponentFixture<ProductsTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsTypesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
