import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignEditComponent } from './design-edit.component';

describe('DesignEditComponent', () => {
  let component: DesignEditComponent;
  let fixture: ComponentFixture<DesignEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
