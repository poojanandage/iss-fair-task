import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairlistComponent } from './fairlist.component';

describe('FairlistComponent', () => {
  let component: FairlistComponent;
  let fixture: ComponentFixture<FairlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
