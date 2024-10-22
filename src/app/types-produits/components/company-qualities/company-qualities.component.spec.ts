import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyQualitiesComponent } from './company-qualities.component';

describe('CompanyQualitiesComponent', () => {
  let component: CompanyQualitiesComponent;
  let fixture: ComponentFixture<CompanyQualitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyQualitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyQualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
