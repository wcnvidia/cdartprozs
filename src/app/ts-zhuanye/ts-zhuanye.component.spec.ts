import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsZhuanyeComponent } from './ts-zhuanye.component';

describe('TsZhuanyeComponent', () => {
  let component: TsZhuanyeComponent;
  let fixture: ComponentFixture<TsZhuanyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsZhuanyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsZhuanyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
