import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JejemonConverterComponent } from './jejemon-converter.component';

describe('JejemonConverterComponent', () => {
  let component: JejemonConverterComponent;
  let fixture: ComponentFixture<JejemonConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JejemonConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JejemonConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
