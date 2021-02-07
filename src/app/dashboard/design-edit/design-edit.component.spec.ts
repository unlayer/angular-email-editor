import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesignEditComponent } from './design-edit.component';

describe('DesignEditComponent', () => {
  let component: DesignEditComponent;
  let fixture: ComponentFixture<DesignEditComponent>;

  beforeEach(waitForAsync(() => {
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
