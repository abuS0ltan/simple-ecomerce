import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProdectsComponent } from './all-prodects.component';

describe('AllProdectsComponent', () => {
  let component: AllProdectsComponent;
  let fixture: ComponentFixture<AllProdectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllProdectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProdectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
