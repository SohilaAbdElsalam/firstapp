import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPart2Component } from './footer-part2.component';

describe('FooterPart2Component', () => {
  let component: FooterPart2Component;
  let fixture: ComponentFixture<FooterPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterPart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
