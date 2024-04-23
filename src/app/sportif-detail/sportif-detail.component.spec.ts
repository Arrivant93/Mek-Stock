import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportifDetailComponent } from './sportif-detail.component';

describe('SportifDetailComponent', () => {
  let component: SportifDetailComponent;
  let fixture: ComponentFixture<SportifDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportifDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportifDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
