import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSimpleComponent } from './portfolio-simple.component';

describe('PortfolioSimpleComponent', () => {
  let component: PortfolioSimpleComponent;
  let fixture: ComponentFixture<PortfolioSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
