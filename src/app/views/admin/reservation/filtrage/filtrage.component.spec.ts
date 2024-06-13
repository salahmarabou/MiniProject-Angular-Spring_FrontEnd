import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrageComponent } from './filtrage.component';

describe('FiltrageComponent', () => {
  let component: FiltrageComponent;
  let fixture: ComponentFixture<FiltrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
