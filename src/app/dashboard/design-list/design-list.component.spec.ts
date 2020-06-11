import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignListComponent } from './design-list.component';

describe('DesignListComponent', () => {
  let component: DesignListComponent;
  let fixture: ComponentFixture<DesignListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
