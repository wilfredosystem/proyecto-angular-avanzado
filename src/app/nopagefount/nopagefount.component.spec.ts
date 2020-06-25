import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopagefountComponent } from './nopagefount.component';

describe('NopagefountComponent', () => {
  let component: NopagefountComponent;
  let fixture: ComponentFixture<NopagefountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopagefountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopagefountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
