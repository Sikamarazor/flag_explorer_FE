import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagCardsComponent } from './flag-cards.component';

describe('FlagCardsComponent', () => {
  let component: FlagCardsComponent;
  let fixture: ComponentFixture<FlagCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
