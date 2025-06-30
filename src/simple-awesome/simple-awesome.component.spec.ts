import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAwesomeComponent } from './simple-awesome.component';

describe('SimpleAwesomeComponent', () => {
  let component: SimpleAwesomeComponent;
  let fixture: ComponentFixture<SimpleAwesomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleAwesomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
