import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanieCreateComponent } from './companie-create.component';

describe('CompanieCreateComponent', () => {
  let component: CompanieCreateComponent;
  let fixture: ComponentFixture<CompanieCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanieCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
