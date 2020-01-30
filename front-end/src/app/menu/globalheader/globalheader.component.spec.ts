import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalheaderComponent } from './globalheader.component';

describe('GlobalheaderComponent', () => {
  let component: GlobalheaderComponent;
  let fixture: ComponentFixture<GlobalheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
