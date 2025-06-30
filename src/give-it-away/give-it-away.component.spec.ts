import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveItAwayComponent } from './give-it-away.component';

describe('GiveItAwayComponent', () => {
  let component: GiveItAwayComponent;
  let fixture: ComponentFixture<GiveItAwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiveItAwayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveItAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
