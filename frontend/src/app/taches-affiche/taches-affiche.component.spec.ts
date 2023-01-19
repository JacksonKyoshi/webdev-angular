import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesAfficheComponent } from './taches-affiche.component';

describe('TachesAfficheComponent', () => {
  let component: TachesAfficheComponent;
  let fixture: ComponentFixture<TachesAfficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TachesAfficheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TachesAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
