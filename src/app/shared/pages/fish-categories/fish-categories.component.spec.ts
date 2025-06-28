import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishCategoriesComponent } from './fish-categories.component';

describe('FishCategoriesComponent', () => {
  let component: FishCategoriesComponent;
  let fixture: ComponentFixture<FishCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FishCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
