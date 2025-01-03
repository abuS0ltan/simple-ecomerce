import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectDetailsComponent } from './prodect-details.component';

describe('ProdectDetailsComponent', () => {
  let component: ProdectDetailsComponent;
  let fixture: ComponentFixture<ProdectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdectDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
