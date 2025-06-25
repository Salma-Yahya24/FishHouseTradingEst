import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishTypesComponent } from './fish-types.component';

describe('FishTypesComponent', () => {
  let component: FishTypesComponent;
  let fixture: ComponentFixture<FishTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FishTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
