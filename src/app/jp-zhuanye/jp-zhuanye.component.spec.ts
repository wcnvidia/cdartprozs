import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpZhuanyeComponent } from './jp-zhuanye.component';

describe('JpZhuanyeComponent', () => {
  let component: JpZhuanyeComponent;
  let fixture: ComponentFixture<JpZhuanyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpZhuanyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpZhuanyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
