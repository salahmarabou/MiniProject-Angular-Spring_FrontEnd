import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChambreComponent } from './view-chambre.component';

describe('ViewChambreComponent', () => {
  let component: ViewChambreComponent;
  let fixture: ComponentFixture<ViewChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
