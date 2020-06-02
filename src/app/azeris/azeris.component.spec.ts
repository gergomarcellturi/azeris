import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzerisComponent } from './azeris.component';

describe('AzerisComponent', () => {
  let component: AzerisComponent;
  let fixture: ComponentFixture<AzerisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzerisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzerisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
