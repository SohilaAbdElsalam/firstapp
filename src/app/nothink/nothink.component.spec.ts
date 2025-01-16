import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NothinkComponent } from './nothink.component';

describe('NothinkComponent', () => {
  let component: NothinkComponent;
  let fixture: ComponentFixture<NothinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NothinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NothinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
