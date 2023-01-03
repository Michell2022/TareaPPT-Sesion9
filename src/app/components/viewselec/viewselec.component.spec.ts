import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewselecComponent } from './viewselec.component';

describe('ViewselecComponent', () => {
  let component: ViewselecComponent;
  let fixture: ComponentFixture<ViewselecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewselecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewselecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
