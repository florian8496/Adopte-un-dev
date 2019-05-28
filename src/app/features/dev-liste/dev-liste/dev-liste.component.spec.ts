import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevListeComponent } from './dev-liste.component';

describe('DevListeComponent', () => {
  let component: DevListeComponent;
  let fixture: ComponentFixture<DevListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
