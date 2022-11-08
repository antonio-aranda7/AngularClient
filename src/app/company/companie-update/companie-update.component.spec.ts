import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanieUpdateComponent } from './companie-update.component';

describe('CompanieUpdateComponent', () => {
  let component: CompanieUpdateComponent;
  let fixture: ComponentFixture<CompanieUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanieUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanieUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
